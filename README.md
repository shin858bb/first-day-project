# first-day-project

シンプルなフルスタック Todo アプリ（Express + 静的フロントエンド）です。学習用に作成しました。

## デモ
- ローカルで動かす手順は下を参照してください。

## 技術スタック
- Backend: Node.js, Express
- Frontend: 静的 HTML + Fetch API
- 開発: nodemon（開発時自動再起動）
- 現状: in-memory 保存（将来的に SQLite 等へ移行予定）

## 主な機能
- Todo の追加 / 一覧 / 完了切替 / 削除（CRUD）
- API:
  - GET /api/todos
  - POST /api/todos
  - PUT /api/todos/:id
  - DELETE /api/todos/:id
  - GET /health
  - GET /api/time

## ローカルで動かす
1. リポジトリをクローン（既にローカルで作業している場合は不要）
   git clone https://github.com/shin858bb/first-day-project.git
2. backend ディレクトリに移動
   cd first-day-project\backend
3. 依存インストール
   npm install
4. 開発サーバ起動
   npx nodemon index.js
5. ブラウザで開く
   http://localhost:3000

## 今後の改善案
- SQLite などで永続化する
- ユーザ認証を追加してユーザ毎の Todo にする
- フロントを React/Vite にして SPA 化
- CI/CD（GitHub Actions）でテスト・デプロイ自動化

## ライセンス
- MIT（必要に応じて変更してください）
