use worker::{Result, Error};
use serde::{Deserialize, Serialize};
use regex::Regex;

use crate::entities::{BookSearchResult, SourceType};

#[derive(Debug, Deserialize)]
struct NdlResponse {
    #[serde(rename = "channel")]
    channel: NdlChannel,
}

#[derive(Debug, Deserialize)]
struct NdlChannel {
    #[serde(rename = "item")]
    items: Vec<NdlItem>,
}

#[derive(Debug, Deserialize)]
struct NdlItem {
    title: String,
    author: Option<String>,
    #[serde(rename = "pubDate")]
    pub_date: Option<String>,
    publisher: Option<String>,
    description: Option<String>,
    link: String,
}

pub struct NdlClient;

impl NdlClient {
    pub fn new() -> Self {
        Self
    }

    pub async fn search(&self, query: &str, limit: Option<u32>) -> Result<Vec<BookSearchResult>> {
        let limit = limit.unwrap_or(20).min(500); // NDL APIの制限
        let encoded_query = urlencoding::encode(query);
        
        let url = format!(
            "https://ndlsearch.ndl.go.jp/api/opensearch?title={}&cnt={}",
            encoded_query, limit
        );

        let mut headers = worker::Headers::new();
        headers.set("User-Agent", "bireco/1.0")?;
        
        let request = worker::Request::new_with_init(&url, worker::RequestInit::new()
            .with_method(worker::Method::Get)
            .with_headers(headers))?;
            
        let mut response = worker::Fetch::Request(request).send().await?;
        
        if response.status_code() < 200 || response.status_code() >= 300 {
            return Err(Error::RustError(format!(
                "NDL API エラー: {}", 
                response.status_code()
            )));
        }

        let xml_text = response.text().await?;

        self.parse_xml_response(&xml_text)
    }

    pub async fn search_by_author(&self, author: &str, limit: Option<u32>) -> Result<Vec<BookSearchResult>> {
        let limit = limit.unwrap_or(20).min(500);
        let encoded_author = urlencoding::encode(author);
        
        let url = format!(
            "https://ndlsearch.ndl.go.jp/api/opensearch?creator={}&cnt={}",
            encoded_author, limit
        );

        let mut headers = worker::Headers::new();
        headers.set("User-Agent", "bireco/1.0")?;
        
        let request = worker::Request::new_with_init(&url, worker::RequestInit::new()
            .with_method(worker::Method::Get)
            .with_headers(headers))?;
            
        let mut response = worker::Fetch::Request(request).send().await?;
        
        if response.status_code() < 200 || response.status_code() >= 300 {
            return Err(Error::RustError(format!(
                "NDL API エラー: {}", 
                response.status_code()
            )));
        }

        let xml_text = response.text().await?;

        self.parse_xml_response(&xml_text)
    }

    fn parse_xml_response(&self, xml: &str) -> Result<Vec<BookSearchResult>> {
        let mut results = Vec::new();
        
        // 簡易的なXMLパージング（本格的な実装では専用のXMLパーサーを使用）
        let title_re = Regex::new(r"<title[^>]*>(.*?)</title>")
            .map_err(|e| Error::RustError(format!("正規表現エラー: {}", e)))?;
        let author_re = Regex::new(r"<author[^>]*>(.*?)</author>")
            .map_err(|e| Error::RustError(format!("正規表現エラー: {}", e)))?;
        let publisher_re = Regex::new(r"<publisher[^>]*>(.*?)</publisher>")
            .map_err(|e| Error::RustError(format!("正規表現エラー: {}", e)))?;
        let description_re = Regex::new(r"<description[^>]*>(.*?)</description>")
            .map_err(|e| Error::RustError(format!("正規表現エラー: {}", e)))?;
        let link_re = Regex::new(r"<link[^>]*>(.*?)</link>")
            .map_err(|e| Error::RustError(format!("正規表現エラー: {}", e)))?;

        // アイテム毎に分割
        let item_re = Regex::new(r"<item[^>]*>(.*?)</item>")
            .map_err(|e| Error::RustError(format!("正規表現エラー: {}", e)))?;
        
        for item_match in item_re.captures_iter(xml) {
            let item_xml = &item_match[1];
            
            let title = title_re.captures(item_xml)
                .and_then(|cap| cap.get(1))
                .map(|m| self.decode_html(m.as_str()))
                .unwrap_or_else(|| "タイトル不明".to_string());

            let authors = author_re.captures(item_xml)
                .and_then(|cap| cap.get(1))
                .map(|m| self.decode_html(m.as_str()));

            let publisher = publisher_re.captures(item_xml)
                .and_then(|cap| cap.get(1))
                .map(|m| self.decode_html(m.as_str()));

            let description = description_re.captures(item_xml)
                .and_then(|cap| cap.get(1))
                .map(|m| self.decode_html(m.as_str()));

            let link = link_re.captures(item_xml)
                .and_then(|cap| cap.get(1))
                .map(|m| m.as_str().to_string())
                .unwrap_or_else(|| "".to_string());

            // NDLのリンクからIDを抽出
            let source_id = self.extract_ndl_id(&link);

            results.push(BookSearchResult {
                source_id,
                title,
                authors,
                isbn: None, // NDL OpenSearchではISBNが直接取得できない場合が多い
                publication_year: None, // 出版年の抽出は複雑なため後回し
                publisher,
                description,
                cover_image_url: None,
            });
        }

        Ok(results)
    }

    fn decode_html(&self, text: &str) -> String {
        text.replace("&lt;", "<")
            .replace("&gt;", ">")
            .replace("&amp;", "&")
            .replace("&quot;", "\"")
            .replace("&#39;", "'")
    }

    fn extract_ndl_id(&self, link: &str) -> String {
        // NDLのリンクからIDを抽出 (例: https://iss.ndl.go.jp/books/R100000002-I000000123456-00)
        if let Some(pos) = link.rfind('-') {
            if let Some(start_pos) = link[..pos].rfind('-') {
                return format!("ndl_{}", &link[start_pos + 1..pos]);
            }
        }
        format!("ndl_{}", link.split('/').last().unwrap_or("unknown"))
    }
}