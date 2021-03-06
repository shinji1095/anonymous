## ハッカソンアプリ

- Golang     :1.16.6
- Next.js    :11.0.1
- Typescript :4.3.5
- MySQL      :8.0

## 準備
- npmのインストール
以下のサイトを参考にインストール
https://qiita.com/taiponrock/items/9001ae194571feb63a5e

- yarnのインストール
以下のサイトを参考にインストール
https://classic.yarnpkg.com/en/docs/install/#windows-stable

- next.jsの使用方法
アプリケーションの作成方法（typescript）
https://nextjs.org/docs

- dockerのインストール
以下のサイトを参考に！
https://qiita.com/bezeklik/items/a6a7335acaec12edda45

- vscodeでmakefileが使えるようにセットアップ
以下のサイト！
https://qiita.com/tokikaze0604/items/e13c04192762f8d4ec85


## 環境構築と実行方法

1. git clone https://github.com/shinji1095/anonymous.git
2. cd ./front/my-app
3. yarn install
4. yarn dev
5. http://localhost:3000 にアクセス


## 開発方法

1. develop ブランチから開発用のブランチを切る。（ブランチ名については下のブランチ命名規則を参照）
2. 開発用のブランチで開発を進める。（このブランチからさらにブランチを切ってマージをさせる分には自由にやってもらって大丈夫です。コミットのルールについては下記を参照）
4. develop -> 開発用ブランチにマージをし、コンフリクトが発生していないか確認する。
5. 開発用のブランチ -> develop にプルリクを出す。
6. レビュアーによる承認を得たら、プルリクを出した人がマージさせる。


## ブランチ命名規則

- 新規ページ design/[ページ名]
- 新規機能 add/[機能名]
- 既存機能の修正 fix/[機能名]
- バグ修正 hotfix/[バグ名]
- リリース release/[バージョン]


## コミットのルール

- コメントの言語（日・英）に関してはとくに定めていません。
- 頭に、タグ（add:, update:, fix: など）をつけてもらえると非常に見やすいかと思います。
- コミットの粒度については、なるべく細かめにお願いします。（目安としては、1機能1コミット）
