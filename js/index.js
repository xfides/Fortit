/* fix of Internet Explorer 10 in Windows 8 and Windows Phone 8*/
// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );
  document.querySelector('head').appendChild(msViewportStyle)
}
/* fix of Internet Explorer 10 in Windows 8 and Windows Phone 8*/

window.onload = function () {

  /*Кнопка прокрутить вверх*/

// сама кнопка с документом
  var html = document.documentElement;
  var body = document.body;
  var btnUp = document.querySelector(".btnUp");
// сама кнопка

// функция скролла вверх
  function toScrollTop() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  };
// функция скролла вверх

// показ кнопки прокрутить вверх
  $(window).scroll(function () {
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop;
    if (scrollTop > 500) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  });
// показ кнопки прокрутить вверх

// выполнить действие проскролить вверх
  $(btnUp).click(toScrollTop);
// выполнить действие проскролить вверх

  /*Кнопка прокрутить вверх*/

};