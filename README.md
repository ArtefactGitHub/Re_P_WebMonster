# React-Redux アプリ開発の学習

React-Redux 及び RailsAPI モードのアプリ開発の学習のためのリポジトリです（更新中）。

- [React](https://reactjs.org/)の実装
- [Redux](https://redux.js.org/)の実装
- [RailsAPI モード](https://railsguides.jp/api_app.html)の実装
- [carrierwave](https://github.com/carrierwaveuploader/carrierwave)を用いた AmazonS3 への画像アップロード
- [axios](https://github.com/axios/axios)、[redux-thunk](https://github.com/reduxjs/redux-thunk)を用いた非同期通信処理の実装
- [react-bootstrap](https://react-bootstrap.github.io/)を用いた View の実装
- [devise](https://github.com/plataformatec/devise)、[devise_token_auth](https://github.com/lynndylanhurley/devise_token_auth)、[redux-token-auth](https://github.com/kylecorbelli/redux-token-auth)を用いたトークン認証の SPA の実装
- [react-notification-system](https://github.com/igorprado/react-notification-system)、[react-notification-system-redux](https://github.com/gor181/react-notification-system-redux)を用いたメッセージ通知の実装

![re-p-webmonster](https://user-images.githubusercontent.com/31361778/55527683-18773880-56d5-11e9-8ee3-c06c0afa3102.gif)

## Ruby version

- See `.ruby-version`.

## Rails version

- See `Gemfile`.

## Project initiation

- Gem のインストール

```bash
$ bundle install --path vendor/bundle
```

- node_modules のインストール

```bash
$ yarn install

$ cd front_end
$ yarn install
```

### Configuration

_ファイルの中身はご自身の環境に合わせて適宜変更してください_

- データベースの設定

```bash

```

- 環境変数の設定

```bash
# Rails
$ cp .env.default .env

# React 開発用
$ cp ./front_end/.env.default ./front_end/.env.development

# React 本番用
$ cp ./front_end/.env.default ./front_end/.env.production
```

### Database creation

```bash
$ bundle exec rails db:create
$ bundle exec rails db:migrate
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

## Deploy Rails Project

[Heroku](https://jp.heroku.com/) を使います。

#### デプロイ

```bash
$ git push heroku master
```

## Deploy React Project

[surge](https://surge.sh/) を使います。

#### インストール

```bash
$ yarn global add surge
```

#### デプロイ

```bash
# 簡易なデプロイ（デプロイ時にデプロイ先ドメインを決めます）
$ yarn run deploy

# デプロイ先ドメインを指定してデプロイ
$ yarn run deploy --domain https://＜任意の名前＞.surge.sh
```

初回デプロイ時にアカウント登録のため、メールアドレスとパスワードをターミナル上で入力します。
