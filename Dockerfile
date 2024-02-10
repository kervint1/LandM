# ベースイメージとしてNode.jsを指定（バージョンを18-alpineに更新）
FROM node:18-alpine

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# 依存関係のファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションのビルド
RUN npm run build

# アプリケーションの起動
CMD ["npm", "start"]
