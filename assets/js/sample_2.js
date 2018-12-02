var boxEl = document.querySelector('a-box');

// カーソルが重なったら拡大
boxEl.addEventListener('mouseenter', function() {
    boxEl.setAttribute('width', 10);
    console.log("mouseenter");
});

// カーソルが離れたら元に戻す
boxEl.addEventListener('mouseleave', function() {
    boxEl.setAttribute('width', 3);
    console.log("mouseleave");
});
