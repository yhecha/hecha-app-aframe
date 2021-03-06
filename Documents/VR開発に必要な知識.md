# VR開発に必要な知識
VR全般の用語などを記載しておく。  

[略語]  
HMD： ヘッドマウントディスプレイ  

<a id="idx_0"></a>

## [目次]  
1. [xR](#idx_1)  
2. [VR HMDのトラッキング方式](#idx_2)  
3. [自由度](#idx_3)  
4. [HMDの種類](#idx_4)  
5. [Web VR とは？](#idx_5)  


<a id="idx_1"></a>

## [1](#idx_0). xR
xRとは、VRやARなどの総称のこと。  
近年、以下のように様々な技術が登場してきている。  

## VR (Virtual Reality: 仮想現実)
仮想世界を現実のように体験できる技術。  
「バーチャルの世界に自分が入り込む」という体験ができる。  

## AR (Augmented Reality: 拡張現実)
現実の世界に仮想の世界を重ねて体験できる技術。  
ポケモンGOなどでも使われている。  

## MR (Mixed Reality: 複合現実)
VR/ARをさらに発展させたような技術。  
現実世界と仮想世界を密接に融合させた技術。  
例えば、ARでは映し出された仮想世界のオブジェクトなどを  
操作することはできないが、MRではそれが可能となる。  

## SR (Substitutional Reality: 代替現実)
ヘッドセットに映される現在と過去の映像を切り替えることで、  
体験者は今と過去を区別して認識することが難しくなり、  
今でも過去でもない「もう一つの現実」を認知するという体験を提供するもの。  
2012年に理化学研究所が開発した技術。  

言葉だと説明し難いので、以下の動画を参考に。  
https://www.youtube.com/watch?v=PVlBpm1UEq0&t=133s  


<p class="ec__link-index"><a href="#idx_0">[^ 目次へ]</a></p>


<a id="idx_2"></a>

## [2](#idx_0). VR HMDのトラッキング方式
センサーを用いてVR HMDの位置情報を検出し、  
体験者(HMD装着者)の頭部の位置・動きを、現実世界とVR体験の両方で一致させること。  
つまり 「VR空間内で自分が今どこにいるのかを判別できる」ということ。  
※ただし、このトラッキングは後述する6DoF対応のHMDでないと対応しない。  
トラッキング方式には主に以下の2つが上げられる。  

## アウトサイドイン方式  
外部に設置したセンサーを利用して、VR HMDの位置を測定する方式。  

[メリット]  
- センサーを外部に設置するため、正確なトラッキングが可能。  

[デメリット]  
- 外部センサーを必要とするため、センサーの範囲外に出てしまうとトラッキング出来ない。  

## インサイドアウト方式  
VR HMD自体に搭載されたセンサー(カメラなど)を利用して位置を測定する方式。  
例えばMicrosoftのMRデバイス「HoloLens」などは  
本体にカメラが搭載されており、そのカメラで外界を撮影することにより位置を割り出している。  
＊最近の新しいVR HMDはだいたいこのインサイドアウト方式になっている。  

[メリット]  
- 外部センサーを必要としないため、余分な機材が不要。  
- トラッキング可能範囲が制限されない。
　-> ルームスケールより広大な「アリーナスケール」の実現が可能になる(数年内に実装)。  

[デメリット]  
- 周囲の明るさなどの環境により精度が左右されるためアウトサイドイン方式より正確性に欠ける。  

<p class="ec__link-index"><a href="#idx_0">[^ 目次へ]</a></p>


<a id="idx_3"></a>

## [3](#idx_0). 自由度
VR HMDが「VR体験において検知できる動きの方向の数」を示す。  
(自由度=Degrees of Freedom)  
- 分かりやすい図の参考  
https://www.cybernet.co.jp/ansys/glossary/jiyudo.html  

## 3DoF
X軸(ピッチ)・Y軸(ヨー)・Z軸(ロール)それぞれの「回転」という3つの動きに対応しているということ。  
3DoFでは、HMDで検出できるのは傾きや回転のみとなる。  
座って楽しむコンテンツに向いている。VRで映画とか見る分にはこれで十分。  


### ピッチ
X軸方向に対する回転運動のこと。  
つまり縦回転ということになる。  
見上げる、見下ろすの動作。  


### ヨー
Y軸方向に対する回転運動のこと。  
つまり横回転ということになる。  
左右に首を振るの動作。  

### ロール
Z軸方向に対する回転運動のこと。  
首をかしげるの動作。  

## 6DoF
前述の3DoFに加え、X軸(Right, Left)・Y軸(Up, Down)・Z軸(Foward, Back)方向の「移動」を加えた、  
合計6つの動作に対応しているということ。  
これにより3DoFよりも没入感は上になる。  

<p class="ec__link-index"><a href="#idx_0">[^ 目次へ]</a></p>


<a id="idx_4"></a>

## [4](#idx_0). HMDの種類
### ハイエンドモデル(PC接続)
[ メリット ]  
- クオリティの高いVR体験が可能。  
- VR HMDで見ている映像をディスプレイに映し出せるため、  
　HMDを付けていない人も映像をみることができる。  
- HMD自体に主要な処理装置などを搭載する必要が無いので軽量。  

[ デメリット ]  
- それなりに高価なPCが必要。(HMDごとにPCの必要要件がある)  
- PCとの接続にケーブルが必要なため、ルームスケール時にケーブルが煩わしい。  
※ルームスケールとは？  
数メートル四方のエリアを「プレイエリア」としてHMDが認識し、その範囲内であれば  
自由に動き回り、VRを体験することができる技術。(認識可能エリアはHMDによる)  

[ 必要なもの ]  
- PC（接続するHMDの必要要件を満たすスペックのもの）  
- VR HMD  
- PC と VR HMD を接続するケーブル。  


### スタンドアロンモデル
[ メリット ]  
- PCを必要としないため、ケーブルの煩わしさが無い＆高スペックPC自体が不  要。

[ デメリット ]  
- クオリティがVR HMD自体のスペックに依存する。  
　(＝ハイエンドモデルにクオリティは及ばない)  
- VR HMDで見ている映像を外部出力が出来ない or 少し工夫する必要がある。  
- 主要処理装置がHMDに搭載されるため（ハイエンドモデルに比べると）若干重い。  

[ 必要なもの ]  
- VR HMD  


### その他(VRビューワー、VRゴーグル)
お手軽にVR体験をしたい場合は、VRビューワー / VRゴーグルとスマホなどを利用して  
基本的な体験をすることはできる。  

- Google Cardboard (ハコスコ)  
段ボールとレンズを用いた組み立て式のVRゴーグル。  
Cardboardの公式サイトで仕様書をDLできるので、素材を用意し自作することも可能。  
https://vr.google.com/intl/ja_jp/cardboard/  

- ニンテンドー Switch VR Kit  
https://www.nintendo.co.jp/labo/kit/vr.html  

<p class="ec__link-index"><a href="#idx_0">[^ 目次へ]</a></p>


<a id="idx_5"></a>

## [5](#idx_0). Web VR とは？
WEB制作に使われるHTMLやJavaScriptを使って、スマホなどのブラウザ上で  
VR体験が可能になる技術。  
※ただし、ブラウザがWEB VRに対応していないとダメ。  

[ JSライブラリ ]  
- Three.js  
HTML5で3Dコンテンツを制作するため、WebGLを簡単に扱えるようにしたライブラリ。  
ゴリゴリのJSで書かないとダメ。  
＊WebGL：ブラウザ上で3次元CGを表示させるための標準仕様。  
ネイティブアプリにしかできなかったGPUへのアクセスを可能にする  
グラフィックAPI。HTML5のcanvas要素を通してブラウザだけで動作する。  

- A-Frame (Mozillaが作った)　https://aframe.io/  
ベースに使われているのはThree.jsだが、HTML内で通常のJSのように読み込むだけで、  
HTMLのタグのような感じで、手軽にVRが作れるようにしたイケてるヤツ。  

<p class="ec__link-index"><a href="#idx_0">[^ 目次へ]</a></p>

-以上-