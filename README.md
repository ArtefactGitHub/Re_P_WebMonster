# React-Redux学習のためのTodoアプリ

React-Reduxを学習するため、簡易なTodoアプリを実装しました。

- Reactの実装
- Reduxの実装
- Presentationコンポーネント、Containerコンポーネントの実装
- ActionCreatorsの実装
- CombineReducersの実装
- axiosを用いた非同期通信処理の実装
- redux-thunkを用いた非同期アクション発行の実装

## Ruby version

- See `.ruby-version`.

## Rails version

- See `Gemfile`.

## Project initiation

- リポジトリのクローン

```bash
$ git@github.com:ArtefactGitHub/Re_T_Todo.git
```

- Gemのインストール

```bash
$ bundle install --path vendor/bundle
```

- node_modulesのインストール

```bash
$ yarn install

$ cd front_end
$ yarn install
```

### Configuration

*ファイルの中身はご自身の環境に合わせて適宜変更してください*

- データベースの設定

```bash
```

- 環境変数の設定

```bash
# 開発用
$ cd front_end
$ echo REACT_APP_BACKEND_URL=http://localhost:3001/ >> .env.development

# 本番用
$ echo REACT_APP_BACKEND_URL=＜本番用バックエンドのURL＞/ >> .env.production
```

### Database creation

```bash
$ bundle exec rails db:create
$ bundle exec rails db:migrate
```

### Database initialization

```bash
```

## Run rails server

```bash
$ bundle exec rails server -p 3001
```

## Run React(node server)

```bash
$ cd front_end
$ yarn start
```

## Deploy React Project

[surge](https://surge.sh/) を使います。

#### インストール
```bash
$ yarn global add surge
```

#### デプロイ
```
# 簡易なデプロイ（デプロイ時にデプロイ先ドメインを決めます）
$ yarn run deploy

# デプロイ先ドメインを指定してデプロイ
$ yarn run deploy --domain https://＜任意の名前＞.surge.sh
```
初回デプロイ時にアカウント登録のため、メールアドレスとパスワードをターミナル上で入力します。
