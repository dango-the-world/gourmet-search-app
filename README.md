# 仕様書

### 作者

HAL 名古屋 3 年 圖子輝也

### アプリ名

レストランサーチアプリ

### 対象 OS

Google Chrome v131.0.6778.205
Microsoft Edge v131.0.2903.112

### 開発環境

VSCode

### 開発言語

TypeScript

### 開発期間

一週間

### 機能

現在地取得機能：GeoLocationAPI を使用して、現在地の緯度と経度を取得できます。
キーワード検索機能：キーワードを入力して、検索条件を絞り込むことができます。
データ一覧表示機能：検索したデータを一覧で表示することができます。

### フレームワーク

Next.js 15.1.3

### 設計ドキュメント

ER 図や画面遷移図等は作成せず課題を進めたため、記載することができませんでした。

### 開発構築手順

必要な物:Node の実行環境
実行環境がない場合、Node をインストールして、実行環境を用意する必要があります。
プロジェクトのインストール:
プロジェクトのディレクトリ上で npm install 又は npm i を実行
サーバーの立ち上げ:
プロジェクトのディレクトリ上で npm run dev を実行

### コンセプト

簡単に検索可能かつ、温かみのある検索アプリ

### こだわったポイント

ファイルをなるべく細かく、機能ごとに分割しました。

### デザイン面でこだわったポイント

全体的に柔らかな UI と温かさを感じる背景色。
一覧画面では価格帯を表示し、より店を選びやすくなるようにしました。

### 技術面でアドバイスしてほしいこと

Hooks の上手な扱い方。
今回のアプリでは状態管理や機能を Hooks に切り分けたのですが、再利用などを行わなかったため、あまり上手に扱うことができなかったと感じています。
Hooks の正しい設計の仕方や扱い方について、アドバイスをいただきたいです。

### 自己評価

70 点
機能は一通り完成させることができたものの、記事や AI の力に頼ってしまう場面も多々あった。
デザインに関しても、比較的シンプルな物になってしまったため、もう少し分かりやすく、ユーザーの印象に残るような UI の設計を行えるようになりたいと感じました。
