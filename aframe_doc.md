# A-Frameのメモ
## A-Frame Inspector を利用する
キーボードの[Ctrl][Alt][i]を同時押しすることで、A-Frame Inspector が起動する。  
位置や角度の設定数値などはソースコード上だけで想像して書くのは慣れが必要。  
Inspectorを利用することで、グラフィカルに設定を変更＆確認することができる。  

## 物理演算用コンポーネント「aframe-physics-system」  
http://vr-lab.voyagegroup.com/entry/2017/01/23/112019  

```
<script src="https://cdn.rawgit.com/donmccurdy/aframe-physics-system/v3.3.0/dist/aframe-physics-system.min.js"></script>
or
npm install aframe-physics-system
```

## canvasはセキュリティ対策として、cross-origin属性のイメージが使えない。  
https://hiyoko1986.wiki.fc2.com/wiki/%E3%83%86%E3%82%AF%E3%82%B9%E3%83%81%E3%83%A3%E5%88%A9%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6  
例えば、ローカルのHTMLファイルをただブラウザに表示させたときなどに、  
以下のようなエラーが発生することがある。  
これを回避するには、実際にサーバー上にファイルを置いて確認すること。  
```
Uncaught SecurityError: Failed to execute 'texImage2D' on 'WebGLRenderingContext': the cross-origin image at file:///D:/hoge.png may not be loaded.
```


<a id="idx_0"></a>

## [目次]  
1. [注視カーソル](#idx_1)  
2. [アニメーション](#idx_2)  
3. [3Dオブジェクト](#idx_3)  
4. [ARを実装する](#idx_4)  
5. [](#idx_5)  
6. [](#idx_6)  
7. [](#idx_7)  
8. [](#idx_8)  
9. [](#idx_9)  
10. [](#idx_10)  


<a id="idx_1"></a>

## [1](#idx_0). 注視カーソル
注視カーソルを作るには以下のようにする。  

```
# 注視カーソルを作る
<a-entity camera look-controls></a-entity>

# 「wasd-controls」を指定するとWASDキーで操作もできる
<a-entity camera look-controls wasd-controls></a-entity>
```
<p class="ec__link-index"><a href="#index">[^ 目次へ]</a></p>


<a id="idx_2"></a>

## [2](#idx_0). アニメーション
アニメーションを設定する例を記す。  
例えば、a-sphereに回転のアニメーションを設定する場合。  

```
<!-- sphereを回転させる例 -->
<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E">
    <!-- アニメーションを追加(オブジェクトを自転させる) -->
    <a-animation
        attribute="rotation"  // アニメーションの種類
        dur="10000"           // アニメーションにかける時間(ミリ秒)
        from="0 0 0"          // 開始時の角度(x y z)
        to="0 360 0"          // 終了時の角度(x y z) 種類が "rotation" なので回転軸になる。
        repeat="0"            // 繰り返し回数。無限にしたい場合は「indefinite」にする。
        easing="linear"       // 速度の変化。linear: 同じ速度、ease-in: 最初がゆっくり、ease-out: 後半がゆっくり。
    >
    </a-animation>
</a-sphere>
```
<p class="ec__link-index"><a href="#index">[^ 目次へ]</a></p>


<a id="idx_3"></a>

## [3](#idx_0). 3Dオブジェクト
Poly というGoogleが提供する3Dデータ共有サービスがある。  
https://poly.google.com/  

### OBJファイルについて
様々な3Dオブジェクトをダウンロード出来る。
以下の拡張子のファイルで構成されている。  
- obj: 3Dモデルの形状のみを表現するファイル。色情報は持たない。  
- png: 3Dモデルに割り当てる色情報を焼き込んだテクスチャ画像。  
- mtl: objファイルとpngファイルを関連付ける情報が記述されたファイル。  

つまり、  
「mtlの情報をみて、obj にテクスチャ画像の png を貼り付けて3Dオブジェクトを作り出す」  
といった感じ。  

また、objにpngテクスチャを貼り付ける場合、  
mtlファイルをテキストエディタで開き、以下のようにマッピングさせる必要がある。  
(PolyからDLすればたいていの場合は記述済みかも)  

```
newmtl Astronaut_mat
illum 4
Kd 0.50 0.50 0.50
Ka 0.00 0.00 0.00
Tf 1.00 1.00 1.00
Ni 1.00

map_Kd ここにpngファイルのパス(同階層であればファイル名だけで良い)を記述。
```

### 3Dオブジェクトを表示させる
3Dオブジェクトを表示させるコードは以下。  

```
<a-obj-model
    src="オブジェクト(.obj)のパス"
    mtl="mtlファイル(.mtl)のパス"
>
</a-obj-model>
```

<p class="ec__link-index"><a href="#index">[^ 目次へ]</a></p>


<a id="idx_4"></a>

## [4](#idx_0). ARを実装する
以下のようにARのライブラリをインポートする。  
なお、カメラを使うためブラウザのセキュリティ上https接続が必須となる。  
iPhoneだと

```
<!-- ARライブラリをインポート -->
<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
..省略..

<!-- a-sceneタグに「embedded」「arjs」を記述する -->
<a-scene embedded arjs>
..省略..
</a-scene>

<!-- a-sceneタグ内に「a-marker」タグを記述する -->
<a-scene embedded arjs>
    <a-marker preset="{マーカー名}">
        <!-- マーカーの上に表示したい内容を記述する -->
        ..省略..
    </a-marker>
</a-scene>

<!-- ARのデバッグモードを非表示にする場合 -->
<a-scene embedded arjs="debugUIEnabled: false;">
..省略..
</a-scene>
```
<p class="ec__link-index"><a href="#index">[^ 目次へ]</a></p>


-End-
