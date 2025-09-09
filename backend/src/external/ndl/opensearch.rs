use worker::{Result, Error};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

use crate::entities::{BookSearchResult, SourceType};

#[derive(Debug, Clone)]
pub struct SearchParams {
    pub title: Option<String>,
    pub creator: Option<String>,
    pub publisher: Option<String>,
    pub any: Option<String>,
    pub isbn: Option<String>,
    pub from_year: Option<String>,
    pub until_year: Option<String>,
    pub dpid: Option<String>,
    pub ndc: Option<String>,
    pub mediatype: Option<String>,
    pub cnt: Option<u32>,
    pub idx: Option<u32>,
}

impl Default for SearchParams {
    fn default() -> Self {
        Self {
            title: None,
            creator: None,
            publisher: None,
            any: None,
            isbn: None,
            from_year: None,
            until_year: None,
            dpid: None,
            ndc: None,
            mediatype: None,
            cnt: Some(20),
            idx: Some(1),
        }
    }
}

impl SearchParams {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn title<S: Into<String>>(mut self, title: S) -> Self {
        self.title = Some(title.into());
        self
    }

    pub fn creator<S: Into<String>>(mut self, creator: S) -> Self {
        self.creator = Some(creator.into());
        self
    }

    pub fn publisher<S: Into<String>>(mut self, publisher: S) -> Self {
        self.publisher = Some(publisher.into());
        self
    }

    pub fn any<S: Into<String>>(mut self, any: S) -> Self {
        self.any = Some(any.into());
        self
    }

    pub fn isbn<S: Into<String>>(mut self, isbn: S) -> Self {
        self.isbn = Some(isbn.into());
        self
    }

    pub fn year_range<S: Into<String>>(mut self, from: Option<S>, until: Option<S>) -> Self {
        self.from_year = from.map(|s| s.into());
        self.until_year = until.map(|s| s.into());
        self
    }

    pub fn limit(mut self, limit: u32) -> Self {
        self.cnt = Some(limit.min(500)); // NDL APIの制限
        self
    }

    pub fn offset(mut self, offset: u32) -> Self {
        self.idx = Some(offset.max(1));
        self
    }

    fn to_query_params(&self) -> HashMap<String, String> {
        let mut params = HashMap::new();

        if let Some(ref title) = self.title {
            params.insert("title".to_string(), title.clone());
        }
        if let Some(ref creator) = self.creator {
            params.insert("creator".to_string(), creator.clone());
        }
        if let Some(ref publisher) = self.publisher {
            params.insert("publisher".to_string(), publisher.clone());
        }
        if let Some(ref any) = self.any {
            params.insert("any".to_string(), any.clone());
        }
        if let Some(ref isbn) = self.isbn {
            params.insert("isbn".to_string(), isbn.clone());
        }
        if let Some(ref from_year) = self.from_year {
            params.insert("from".to_string(), from_year.clone());
        }
        if let Some(ref until_year) = self.until_year {
            params.insert("until".to_string(), until_year.clone());
        }
        if let Some(ref dpid) = self.dpid {
            params.insert("dpid".to_string(), dpid.clone());
        }
        if let Some(ref ndc) = self.ndc {
            params.insert("ndc".to_string(), ndc.clone());
        }
        if let Some(ref mediatype) = self.mediatype {
            params.insert("mediatype".to_string(), mediatype.clone());
        }
        if let Some(cnt) = self.cnt {
            params.insert("cnt".to_string(), cnt.to_string());
        }
        if let Some(idx) = self.idx {
            params.insert("idx".to_string(), idx.to_string());
        }

        params
    }
}

#[derive(Debug)]
pub struct NdlOpenSearchClient {
    base_url: String,
    user_agent: String,
}

impl Default for NdlOpenSearchClient {
    fn default() -> Self {
        Self {
            base_url: "https://ndlsearch.ndl.go.jp/api/opensearch".to_string(),
            user_agent: "bireco/1.0".to_string(),
        }
    }
}

impl NdlOpenSearchClient {
    pub fn new() -> Self {
        Self::default()
    }

    pub async fn search(&self, params: SearchParams) -> Result<Vec<BookSearchResult>> {
        // パラメータチェック：dpidのみの指定は不可
        if params.dpid.is_some() && 
           params.title.is_none() && 
           params.creator.is_none() && 
           params.publisher.is_none() && 
           params.any.is_none() && 
           params.isbn.is_none() {
            return Err(Error::RustError("dpid only search is not allowed".to_string()));
        }

        let query_params = params.to_query_params();
        let url = self.build_url(query_params)?;

        let response = reqwest::Client::new()
            .get(&url)
            .header("User-Agent", &self.user_agent)
            .send()
            .await
            .map_err(|e| Error::RustError(format!("NDL API request failed: {}", e)))?;

        if !response.status().is_success() {
            return Err(Error::RustError(format!(
                "NDL API error: {}", 
                response.status()
            )));
        }

        let xml_text = response
            .text()
            .await
            .map_err(|e| Error::RustError(format!("Failed to get NDL API response: {}", e)))?;

        self.parse_rss_response(&xml_text)
    }

    pub async fn search_by_title(&self, title: &str, limit: Option<u32>) -> Result<Vec<BookSearchResult>> {
        let params = SearchParams::new()
            .title(title)
            .limit(limit.unwrap_or(20));
        self.search(params).await
    }

    pub async fn search_by_creator(&self, creator: &str, limit: Option<u32>) -> Result<Vec<BookSearchResult>> {
        let params = SearchParams::new()
            .creator(creator)
            .limit(limit.unwrap_or(20));
        self.search(params).await
    }

    pub async fn search_by_isbn(&self, isbn: &str) -> Result<Vec<BookSearchResult>> {
        let params = SearchParams::new()
            .isbn(isbn)
            .limit(10);
        self.search(params).await
    }

    fn build_url(&self, params: HashMap<String, String>) -> Result<String> {
        let mut url = self.base_url.clone();
        
        if !params.is_empty() {
            url.push('?');
            let query_string: Vec<String> = params
                .iter()
                .map(|(key, value)| {
                    format!("{}={}", key, urlencoding::encode(value))
                })
                .collect();
            url.push_str(&query_string.join("&"));
        }

        Ok(url)
    }

    fn parse_rss_response(&self, xml: &str) -> Result<Vec<BookSearchResult>> {
        let mut results = Vec::new();
        
        // RSS2.0形式のXMLをパース
        // <item>要素を抽出（名前空間対応のため、より柔軟な正規表現）
        let item_pattern = regex::Regex::new(r"(?s)<item[^>]*>(.*?)</item>")
            .map_err(|e| Error::RustError(format!("Regex error: {}", e)))?;

        for item_match in item_pattern.captures_iter(xml) {
            let item_xml = &item_match[1];
            
            if let Ok(book_result) = self.parse_item(item_xml) {
                results.push(book_result);
            }
        }
        Ok(results)
    }

    fn parse_item(&self, item_xml: &str) -> Result<BookSearchResult> {
        let title = self.extract_xml_content(item_xml, "title")?;
        let description = self.extract_xml_content(item_xml, "description").ok();
        let link = self.extract_xml_content(item_xml, "link").unwrap_or_default();
        let pub_date = self.extract_xml_content(item_xml, "pubDate").ok();

        // NDL固有の要素を抽出
        let creator = self.extract_xml_content(item_xml, "dc:creator").ok();
        let publisher = self.extract_xml_content(item_xml, "dc:publisher").ok();
        let identifier = self.extract_xml_content(item_xml, "dc:identifier").ok();

        // ISBNを識別子から抽出
        let isbn = identifier
            .as_ref()
            .and_then(|id| self.extract_isbn(id));

        // 出版年を抽出
        let publication_year = pub_date
            .as_ref()
            .and_then(|date| self.extract_year(date));

        // NDL固有のIDを生成
        let source_id = self.generate_source_id(&link);

        Ok(BookSearchResult {
            source_id,
            title: self.decode_html_entities(&title),
            authors: creator.map(|c| self.decode_html_entities(&c)),
            isbn,
            publication_year,
            publisher: publisher.map(|p| self.decode_html_entities(&p)),
            description: description.map(|d| self.decode_html_entities(&d)),
            cover_image_url: None, // NDL OpenSearchでは画像URLは提供されない
        })
    }

    fn extract_xml_content(&self, xml: &str, tag: &str) -> Result<String> {
        let pattern = format!(r"<{}[^>]*>(.*?)</{}>", tag, tag);
        let regex = regex::Regex::new(&pattern)
            .map_err(|e| Error::RustError(format!("Regex error for tag {}: {}", tag, e)))?;
        
        regex.captures(xml)
            .and_then(|cap| cap.get(1))
            .map(|m| m.as_str().to_string())
            .ok_or_else(|| Error::RustError(format!("Tag {} not found", tag)))
    }

    fn decode_html_entities(&self, text: &str) -> String {
        // CDATAタグを削除
        let cleaned = if text.contains("<![CDATA[") && text.contains("]]>") {
            text.replace("<![CDATA[", "").replace("]]>", "")
        } else {
            text.to_string()
        };
        
        // HTML entities をデコード（HTMLタグはそのまま保持）
        cleaned.replace("&lt;", "<")
            .replace("&gt;", ">")
            .replace("&amp;", "&")
            .replace("&quot;", "\"")
            .replace("&#39;", "'")
            .replace("&apos;", "'")
            .trim()
            .to_string()
    }

    fn extract_isbn(&self, identifier: &str) -> Option<String> {
        let isbn_pattern = regex::Regex::new(r"(?:ISBN[:\s]*)?(\d{10}|\d{13})").ok()?;
        isbn_pattern.captures(identifier)
            .and_then(|cap| cap.get(1))
            .map(|m| m.as_str().to_string())
    }

    fn extract_year(&self, date: &str) -> Option<i32> {
        let year_pattern = regex::Regex::new(r"(\d{4})").ok()?;
        year_pattern.captures(date)
            .and_then(|cap| cap.get(1))
            .and_then(|m| m.as_str().parse::<i32>().ok())
    }

    fn generate_id_from_title(&self, title: &str) -> String {
        use std::collections::hash_map::DefaultHasher;
        use std::hash::{Hash, Hasher};
        
        let mut hasher = DefaultHasher::new();
        title.hash(&mut hasher);
        format!("ndl_{:x}", hasher.finish())
    }

    fn generate_source_id(&self, link: &str) -> String {
        if link.is_empty() {
            return format!("ndl_{}", uuid::Uuid::new_v4().to_string());
        }

        // NDLのURLからIDを抽出
        if let Some(captures) = regex::Regex::new(r"/([^/]+)/?$").unwrap().captures(link) {
            if let Some(id) = captures.get(1) {
                return format!("ndl_{}", id.as_str().replace("-", "_"));
            }
        }

        // フォールバック: リンクの一部をハッシュ化
        format!("ndl_{:x}", {
            use std::collections::hash_map::DefaultHasher;
            use std::hash::{Hash, Hasher};
            let mut hasher = DefaultHasher::new();
            link.hash(&mut hasher);
            hasher.finish()
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_search_params_builder() {
        let params = SearchParams::new()
            .title("テスト")
            .creator("作者")
            .limit(10);

        assert_eq!(params.title, Some("テスト".to_string()));
        assert_eq!(params.creator, Some("作者".to_string()));
        assert_eq!(params.cnt, Some(10));
    }

    #[test]
    fn test_url_building() {
        let client = NdlOpenSearchClient::new();
        let mut params = HashMap::new();
        params.insert("title".to_string(), "テスト".to_string());
        params.insert("cnt".to_string(), "10".to_string());

        let url = client.build_url(params).unwrap();
        assert!(url.contains("title=%E3%83%86%E3%82%B9%E3%83%88"));
        assert!(url.contains("cnt=10"));
    }
}