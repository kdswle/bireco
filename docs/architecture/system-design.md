# システムアーキテクチャ

## 全体構成図

```
┌─────────────────────────────────────────────────────┐
│                    User                             │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│              Frontend (React)                       │
│         Cloudflare Pages                            │
└─────────────────────┬───────────────────────────────┘
                      │ HTTPS/API
┌─────────────────────▼───────────────────────────────┐
│            Backend (Rust)                           │
│         Cloudflare Workers                          │
├─────────────────────┬───────────────────────────────┤
│                     │                               │
│   ┌─────────────────▼───────────────┐               │
│   │        Cloudflare D1            │               │
│   │         (SQLite)                │               │
│   └─────────────────────────────────┘               │
└─────────────────────┬───────────────────────────────┘
                      │ External API
┌─────────────────────▼───────────────────────────────┐
│                NDL API                              │
│      (国立国会図書館検索API)                           │
└─────────────────────────────────────────────────────┘
```

## Clean Architecture 実装

### レイヤー構成

```
┌─────────────────────────────────────────┐
│              Presentation               │
│        (Handlers, Controllers)         │
├─────────────────────────────────────────┤
│              Use Cases                  │
│         (Business Logic)                │
├─────────────────────────────────────────┤
│              Entities                   │
│          (Domain Models)                │
├─────────────────────────────────────────┤
│            Infrastructure               │
│      (Database, External APIs)         │
└─────────────────────────────────────────┘
```

### ディレクトリ構成 (Backend)

```
backend/src/
├── handlers/           # Presentation Layer
│   ├── book_handler.rs
│   └── review_handler.rs
├── use_cases/          # Application Layer
│   ├── book_use_case.rs
│   └── review_use_case.rs
├── entities/           # Domain Layer
│   ├── book.rs
│   ├── review.rs
│   └── author.rs
├── repositories/       # Infrastructure Layer
│   ├── book_repository.rs
│   └── review_repository.rs
├── external/           # External Services
│   └── ndl_client.rs
└── lib.rs
```

## エンティティ設計

### Core Entities

**Book (本)**
```typescript
interface Book {
  id: string;           // UUID
  title: string;        // 書籍タイトル
  authors: string;      // 著者名（カンマ区切り）
  isbn?: string;        // ISBN（任意）
  publication_year?: number;
  publisher?: string;   // 出版社
  description?: string; // 概要
  cover_image_url?: string;
  source_type: 'ndl' | 'amazon' | 'manual'; // 取得元（拡張性考慮）
  source_id: string;    // 外部ID
  created_at: DateTime;
  updated_at: DateTime;
}
```

**User (ユーザー)**
```typescript
interface User {
  id: string;           // UUID
  username: string;     // ユーザー名（一意）
  email: string;        // メールアドレス（一意）
  display_name: string; // 表示名
  avatar_url?: string;  // アバター画像URL
  created_at: DateTime;
  updated_at: DateTime;
}
```

**Review (感想)**
```typescript
interface Review {
  id: string;
  book_id: string;
  user_id: string;      // 投稿ユーザーID
  title: string;        // 感想のタイトル
  content: string;      // 感想内容
  rating?: number;      // 5段階評価（任意）
  created_at: DateTime;
  updated_at: DateTime;
}
```

**設計判断:**
- 著者テーブルは作成せず、書籍テーブルに文字列として格納
- 著者名の正規化は行わず、UI側で著者名検索機能を提供
- ユーザー認証を導入し、感想投稿には認証が必要
- 感想にはuser_idを持たせて投稿者を特定
- シンプルさを優先し、MVPとして必要十分な設計に

## 技術選択理由

### フロントエンド
- **React**: 豊富なエコシステムと学習コスト
- **TypeScript**: 型安全性による開発効率向上
- **Vite**: 高速なビルドとHMR

### バックエンド
- **Rust**: パフォーマンスと安全性
- **Cloudflare Workers**: エッジコンピューティングによる低レイテンシ
- **wasm-bindgen**: WebAssemblyとの連携

### データベース
- **Cloudflare D1**: Workers統合とSQLiteの使いやすさ

## デプロイメント戦略

### ブランチ戦略
- `main`: 本番環境自動デプロイ
- `dev`: ラベル付きでプレビューデプロイ

### CI/CD フロー
```
GitHub Push → GitHub Actions → Cloudflare Pages/Workers
```