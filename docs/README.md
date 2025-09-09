# bireco - 設計ドキュメント

## 📚 概要
birecoは本の感想投稿サービスです。ユーザーは本を検索し、見つけた本について感想を投稿・共有できます。

## 🏗️ アーキテクチャ
- **フロントエンド**: TypeScript + Vite + React (Cloudflare Pages)
- **バックエンド**: Rust + Cloudflare Workers
- **データベース**: Cloudflare D1 (SQLite)
- **外部API**: 国立国会図書館（NDL）検索API

## 📖 ドキュメント構成

### [システムアーキテクチャ](./architecture/)
- 全体システム設計
- Clean Architecture実装方針
- 技術スタック詳細

### [データベース設計](./database/)
- エンティティ関係図
- テーブル定義
- インデックス設計

### [API仕様](./api/)
- RESTエンドポイント定義
- リクエスト/レスポンス形式
- エラーハンドリング

### [UI/UX設計](./ui/)
- 画面設計
- ユーザーフロー
- コンポーネント設計

## 🚀 開発環境構築
```bash
# フロントエンド開発サーバー起動
cd frontend && npm run dev

# バックエンド開発
cd backend && wrangler dev
```

## 📝 実装方針
- **保守性**: 適切なモジュール分割とクリーンアーキテクチャ
- **拡張性**: Amazon PA APIへの移行を見据えた抽象化
- **可搬性**: Core/Infra/Entrypoint分離によるポータビリティ確保