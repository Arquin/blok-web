/*jshint browser: true, strict: true, undef: true */
/*global define: false */

//document.addEventListener('DOMContentLoaded', function () {
//    var buttons = document.querySelectorAll('download');
//
//    for (var i = 0, max = buttons.length; i < max; i++) {
//        buttons[i].addEventListener('click', addPressedClass);
//    }
//
//    function addPressedClass(e) {
//        var btn = e.target;
//        btn.classList.add('pressed');
//        setTimeout(function () {
//            btn.classList.remove('pressed');
//        }, 400);
//    }
//}, false);


function download() {
  var elem = document.getElementById('vinkje');
  elem.style.opacity = 1;
}

var delay = 10000;

setTimeout( download, delay)
