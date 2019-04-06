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

## Devise version
#### devise： 4.6.2

#### devise_token_auth： 1.1.0
<details><div>
  
```rb
# Gemfile
gem 'devise_token_auth', github: 'lynndylanhurley/devise_token_auth'
```
  
```rb
# Gemfile.lock
remote: https://github.com/lynndylanhurley/devise_token_auth.git
revision: f929fb458012a91474f92cd948739cea98bcb419
specs:
  devise_token_auth (1.1.0)
    devise (> 3.5.2, < 4.7)
    rails (>= 4.2.0, < 6)
```
</div></details>
  
#### redux-token-auth： 0.19.1
<details><div>
  
```rb
# package.json
  "redux-token-auth": "zopelee/redux-token-auth"
```
  
```rb
# yarn.lock
redux-token-auth@zopelee/redux-token-auth:
  version "0.19.1"
  resolved "https://codeload.github.com/zopelee/redux-token-auth/tar.gz/3189f4d20025bcf316a43ce8d5fea72fb9f6edad"
  dependencies:
    "@callstack/async-storage" "^1.1.0"
    "@types/react" "^16.7.9"
    "@types/react-native" "^0.57.15"
    "@types/react-redux" "^6.0.10"
    axios "^0.18.0"
    react "^16.6.3"
    react-native-storage "^1.0.0-beta.0"
    react-redux "^5.1.1"
    redux "^4.0.1"
```
</div></details>


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
