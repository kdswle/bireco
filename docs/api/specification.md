# API仕様書

## 共通仕様

### ベースURL
- 開発環境: `http://localhost:8787`
- 本番環境: `https://bireco-api.your-domain.workers.dev`

### レスポンス形式

#### 成功レスポンス
```typescript
interface ApiResponse<T> {
  data: T;
  success: true;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
  success: true;
}
```

#### エラーレスポンス
```typescript
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
}
```

### HTTPステータスコード
- `200`: 成功
- `201`: 作成成功
- `400`: バリデーションエラー
- `404`: リソースが見つからない
- `500`: サーバーエラー

---

## 🔐 認証関連API

### ユーザー登録
新規ユーザーアカウントを作成

**エンドポイント:** `POST /api/auth/register`

**リクエストボディ:**
```typescript
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  display_name: string;
}
```

**レスポンス:**
```typescript
interface AuthResponse {
  user: {
    id: string;
    username: string;
    email: string;
    display_name: string;
    avatar_url?: string;
  };
  token: string; // JWT トークン
}

type Response = ApiResponse<AuthResponse>;
```

### ログイン
ユーザー認証とトークン発行

**エンドポイント:** `POST /api/auth/login`

**リクエストボディ:**
```typescript
interface LoginRequest {
  username: string; // または email
  password: string;
}
```

**レスポンス:** `ApiResponse<AuthResponse>`

### ユーザー情報取得
認証済みユーザーの情報を取得

**エンドポイント:** `GET /api/auth/me`

**ヘッダー:** `Authorization: Bearer <token>`

**レスポンス:** `ApiResponse<User>`

### トークン更新
JWTトークンのリフレッシュ

**エンドポイント:** `POST /api/auth/refresh`

**ヘッダー:** `Authorization: Bearer <token>`

**レスポンス:**
```typescript
interface RefreshResponse {
  token: string;
}

type Response = ApiResponse<RefreshResponse>;
```

---

## 📚 書籍関連API

### 書籍検索
NDL APIを経由して書籍を検索

**エンドポイント:** `GET /api/books/search`

**クエリパラメータ:**
- `q` (必須): 検索クエリ
- `limit` (任意): 取得件数 (デフォルト: 20, 最大: 100)

**リクエスト例:**
```http
GET /api/books/search?q=村上春樹&limit=10
```

**レスポンス:**
```typescript
interface BookSearchResult {
  source_id: string;
  title: string;
  authors: string; // カンマ区切りの著者名
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
}

type Response = ApiResponse<BookSearchResult[]>;
```

**レスポンス例:**
```json
{
  "success": true,
  "data": [
    {
      "source_id": "ndl_12345",
      "title": "ノルウェイの森",
      "authors": "村上春樹",
      "isbn": "9784062749893",
      "publication_year": 2004,
      "publisher": "講談社",
      "description": "直子と緑、二人の女性を愛した青年ワタナベの物語",
      "cover_image_url": "https://example.com/cover.jpg"
    }
  ]
}
```

### 書籍詳細取得
登録済み書籍の詳細情報を取得

**エンドポイント:** `GET /api/books/{book_id}`

**パスパラメータ:**
- `book_id`: 書籍ID (UUID)

**レスポンス:**
```typescript
interface BookDetail {
  id: string;
  title: string;
  authors: string; // カンマ区切りの著者名
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
  review_count: number;
  average_rating?: number;
  created_at: string;
}

type Response = ApiResponse<BookDetail>;
```

### 書籍登録
新しい書籍をデータベースに登録

**エンドポイント:** `POST /api/books`

**リクエストボディ:**
```typescript
interface CreateBookRequest {
  source_type: 'ndl' | 'amazon' | 'manual';
  source_id: string;
  title: string;
  authors: string; // カンマ区切りの著者名
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
}
```

**レスポンス:** `ApiResponse<BookDetail>`

---

## 💭 感想関連API

### 感想一覧取得
書籍に対する感想一覧を取得

**エンドポイント:** `GET /api/reviews`

**クエリパラメータ:**
- `book_id` (任意): 特定の書籍の感想のみ取得
- `limit` (任意): 取得件数 (デフォルト: 20)
- `offset` (任意): 取得開始位置 (デフォルト: 0)

**レスポンス:**
```typescript
interface Review {
  id: string;
  book_id: string;
  book_title: string;
  user: {
    id: string;
    username: string;
    display_name: string;
    avatar_url?: string;
  };
  title: string;
  content: string; // Markdown形式
  rating?: number;
  created_at: string;
  updated_at: string;
}

type Response = PaginatedResponse<Review>;
```

### 最新感想一覧取得
最新の感想を時系列で取得

**エンドポイント:** `GET /api/reviews/latest`

**クエリパラメータ:**
- `limit` (任意): 取得件数 (デフォルト: 20)

**レスポンス:** `ApiResponse<Review[]>`

### 感想詳細取得
特定の感想の詳細を取得

**エンドポイント:** `GET /api/reviews/{review_id}`

**レスポンス:** `ApiResponse<Review>`

### 感想投稿
新しい感想を投稿（認証必須）

**エンドポイント:** `POST /api/reviews`

**ヘッダー:** `Authorization: Bearer <token>`

**リクエストボディ:**
```typescript
interface CreateReviewRequest {
  book_id: string;
  title: string;
  content: string; // Markdown形式
  rating?: number; // 1-5
}
```

**レスポンス:** `ApiResponse<Review>`

### 感想更新
既存の感想を更新（認証必須・自分の感想のみ）

**エンドポイント:** `PUT /api/reviews/{review_id}`

**ヘッダー:** `Authorization: Bearer <token>`

**リクエストボディ:**
```typescript
interface UpdateReviewRequest {
  title?: string;
  content?: string; // Markdown形式
  rating?: number;
}
```

**レスポンス:** `ApiResponse<Review>`

### 感想削除
感想を削除（認証必須・自分の感想のみ）

**エンドポイント:** `DELETE /api/reviews/{review_id}`

**ヘッダー:** `Authorization: Bearer <token>`

**レスポンス:**
```typescript
interface DeleteResponse {
  success: true;
  message: string;
}
```

---

## 📝 下書き関連API

### 下書き保存
感想の下書きを保存（認証必須・自動保存用）

**エンドポイント:** `POST /api/drafts`

**ヘッダー:** `Authorization: Bearer <token>`

**リクエストボディ:**
```typescript
interface SaveDraftRequest {
  book_id: string;
  title?: string;
  content?: string; // Markdown形式
  rating?: number;
}
```

**レスポンス:**
```typescript
interface Draft {
  id: string;
  book_id: string;
  title?: string;
  content?: string;
  rating?: number;
  created_at: string;
  updated_at: string;
}

type Response = ApiResponse<Draft>;
```

### 下書き取得
特定書籍の下書きを取得（認証必須）

**エンドポイント:** `GET /api/drafts/book/{book_id}`

**ヘッダー:** `Authorization: Bearer <token>`

**レスポンス:** `ApiResponse<Draft | null>`

### 下書きから感想作成
下書きを正式な感想として投稿（認証必須）

**エンドポイント:** `POST /api/drafts/{draft_id}/publish`

**ヘッダー:** `Authorization: Bearer <token>`

**レスポンス:** `ApiResponse<Review>`

---

## 🔍 外部API統合

### NDL API連携

**使用API:** 国立国会図書館サーチAPI (OpenSearch)
- エンドポイント: `https://iss.ndl.go.jp/api/opensearch`
- 形式: RSS/XML
- 制限: 1回あたり500件まで

**検索パラメータマッピング:**
- `title`: タイトル検索
- `creator`: 著者検索  
- `isbn`: ISBN検索
- `cnt`: 取得件数

### エラーハンドリング

**NDL API エラー:**
```json
{
  "success": false,
  "error": {
    "code": "NDL_API_ERROR",
    "message": "外部API呼び出しに失敗しました",
    "details": {
      "status": 500,
      "ndl_error": "Internal Server Error"
    }
  }
}
```

**バリデーションエラー:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "リクエストが不正です",
    "details": {
      "field": "title",
      "message": "タイトルは必須です"
    }
  }
}
```

---

## 📋 実装チェックリスト

### 書籍API
- [ ] NDL API クライアント実装
- [ ] 書籍検索エンドポイント
- [ ] 書籍詳細取得エンドポイント
- [ ] 書籍登録エンドポイント

### 感想API
- [ ] 感想一覧取得エンドポイント
- [ ] 感想詳細取得エンドポイント  
- [ ] 感想投稿エンドポイント
- [ ] 感想更新エンドポイント
- [ ] 感想削除エンドポイント

### 共通機能
- [ ] エラーハンドリングミドルウェア
- [ ] CORS設定
- [ ] レスポンス型定義
- [ ] バリデーション機能