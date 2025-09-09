# bireco

本の感想を共有するWebサービス

## 📚 概要

birecoは、読書愛好家のための感想投稿・共有プラットフォームです。国立国会図書館の検索APIを活用して豊富な書籍データベースから本を検索し、Markdownエディタで思い通りの感想を記録・共有できます。

### 主な機能

- 📖 **書籍検索**: 国立国会図書館APIによる豊富な書籍データベース
- ✍️ **感想投稿**: Markdown対応エディタで表現豊かな感想を記録
- 💾 **自動保存**: 書きかけの感想は下書きとして自動保存
- 👥 **コミュニティ**: 他の読者の感想を読んで新しい本と出会う
- ⭐ **評価システム**: 5段階評価で本の満足度を共有

## 🛠️ 技術スタック

### フロントエンド
- **React 18** + **TypeScript**
- **Vite** (高速ビルド)
- **Material-UI** (UIコンポーネント)
- **React Router** (ルーティング)
- **React Query** (データ取得・キャッシュ)

### バックエンド
- **Rust** + **Cloudflare Workers**
- **Cloudflare D1** (SQLiteデータベース)
- **Clean Architecture** (拡張可能な設計)
- **JWT認証**

### 外部API
- **国立国会図書館サーチAPI** (書籍データ)

## 🚀 ローカル開発環境の構築

### 前提条件

以下のツールがインストールされている必要があります：

- [Node.js](https://nodejs.org/) (v18以上)
- [Rust](https://rustup.rs/) (最新stable版)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

```bash
# Rustのインストール
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Wranglerのインストール
npm install -g wrangler
```

### セットアップ手順

1. **リポジトリをクローン**

```bash
git clone <repository-url>
cd bireco
```

2. **フロントエンドの設定**

```bash
cd frontend
npm install
```

3. **バックエンドの設定**

```bash
cd ../backend
npm install -g wrangler  # まだの場合
```

4. **Cloudflareアカウントの設定**

```bash
# Cloudflareにログイン
wrangler login

# D1データベースを作成
wrangler d1 create bireco

# 作成されたデータベースIDをwrangler.tomlに設定
# database_id = "出力されたデータベースID"
```

5. **データベースのマイグレーション**

```bash
cd backend
wrangler d1 execute bireco --file=./migrations/0001_initial_schema.sql
```

6. **環境変数の設定**

`backend/wrangler.toml`を編集：

```toml
[vars]
JWT_SECRET = "your-secret-key-here"  # 強力なランダム文字列に変更
```

### 開発サーバーの起動

**ターミナル1: バックエンド**

```bash
cd backend
wrangler dev
```

- バックエンドAPI: http://localhost:8787

**ターミナル2: フロントエンド**

```bash
cd frontend
npm run dev
```

- フロントエンドアプリ: http://localhost:5173

## 📁 プロジェクト構成

```
bireco/
├── frontend/                # Reactフロントエンド
│   ├── src/
│   │   ├── components/     # 再利用可能なコンポーネント
│   │   ├── pages/         # ページコンポーネント
│   │   ├── contexts/      # React Context (認証など)
│   │   ├── lib/          # API呼び出し・ユーティリティ
│   │   └── types/        # TypeScript型定義
│   └── package.json
├── backend/                # Rustバックエンド
│   ├── src/
│   │   ├── entities/     # ドメインモデル
│   │   ├── repositories/ # データアクセス層
│   │   ├── use_cases/    # ビジネスロジック
│   │   ├── handlers/     # APIハンドラー
│   │   └── external/     # 外部API連携
│   ├── migrations/       # データベースマイグレーション
│   └── wrangler.toml    # Cloudflare Workers設定
├── docs/                   # 設計ドキュメント
│   ├── architecture/      # システム設計
│   ├── database/         # DB設計
│   ├── api/             # API仕様
│   └── ui/              # UI/UX設計
└── README.md
```

## 🔧 開発コマンド

### フロントエンド

```bash
cd frontend

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー（ビルド後の確認）
npm run preview

# 型チェック
npm run tsc

# Linting
npm run lint
```

### バックエンド

```bash
cd backend

# 開発サーバー起動
wrangler dev

# ビルド確認
cargo check

# テスト実行
cargo test

# D1データベース操作
wrangler d1 execute bireco --command="SELECT * FROM users;"

# ログ確認
wrangler tail
```

## 🌐 デプロイ

### Cloudflare Pagesへのデプロイ

1. **フロントエンド**

```bash
cd frontend
npm run build

# Cloudflare Pagesにデプロイ
wrangler pages publish dist
```

2. **バックエンド**

```bash
cd backend

# 本番環境にデプロイ
wrangler publish

# 本番データベースのマイグレーション
wrangler d1 execute bireco --env=production --file=./migrations/0001_initial_schema.sql
```

## 🐛 トラブルシューティング

### よくある問題

1. **CORS エラー**
   - バックエンドのCORS設定を確認
   - フロントエンドのAPIベースURLを確認

2. **データベース接続エラー**
   - `wrangler.toml`のdatabase_idが正しいか確認
   - マイグレーションが実行されているか確認

3. **認証エラー**
   - JWT_SECRETが設定されているか確認
   - トークンの有効期限を確認

4. **NDL API エラー**
   - インターネット接続を確認
   - API制限に達していないか確認

### ログの確認

```bash
# Workersのログ
wrangler tail

# フロントエンドのログ
ブラウザのDevToolsを使用
```

## 📖 API ドキュメント

詳細なAPI仕様については [docs/api/specification.md](./docs/api/specification.md) を参照してください。

## 🤝 開発への貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成: `git checkout -b feature/amazing-feature`
3. 変更をコミット: `git commit -m 'Add some amazing feature'`
4. ブランチにプッシュ: `git push origin feature/amazing-feature`
5. Pull Requestを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。