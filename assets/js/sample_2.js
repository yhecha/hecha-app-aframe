var boxEl = document.querySelector('a-box');
// カーソルがぶつかったら拡大
// boxEl.addEventListener('mouseenter', function() {
//     boxEl.setAttribute('width', 5);
//     console.log("mouseenter");
// });

// 注視カーソルクリック
boxEl.addEventListener('click', function() {
    document.getElementById("bgSky").src = "#house_2f";
    console.log("idou");
});

// カーソルが離れたら元にもどす
boxEl.addEventListener('mouseleave', function() {
    boxEl.setAttribute('width', 2);
    console.log("mouseleave");
});