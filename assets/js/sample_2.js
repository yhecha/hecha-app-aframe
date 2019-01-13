var boxEl = document.querySelector('a-box');
// カーソルがぶつかったら拡大
// boxEl.addEventListener('mouseenter', function() {
//     boxEl.setAttribute('width', 5);
//     console.log("mouseenter");
// });

// 注視カーソルクリック
boxEl.addEventListener('mouseenter', function() {
    document.getElementById("bgSky").src = "./assets/images/equirectangular/house_1_2f.jpg";
    console.log("idou");
});

// カーソルが離れたら元にもどす
boxEl.addEventListener('mouseleave', function() {
    boxEl.setAttribute('width', 2);
    console.log("mouseleave");
});