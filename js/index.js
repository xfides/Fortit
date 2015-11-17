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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*весь скрипт карты, управляемый гугловским API*/

  google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
  var mapOptions = {
    center: new google.maps.LatLng(55.746342,37.588805),
    zoom: 12,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    scaleControl: true,
    scrollwheel: false,
    panControl: true,
    streetViewControl: true,
    draggable : true,
    overviewMapControl: true,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }
  var mapElement = document.getElementById('mapCanvas');
  var map = new google.maps.Map(mapElement, mapOptions);
  var locations = [
    ['Наша фирма Fortit', 'Ул. Плюшина. Дом 27. Парадный вход. 3 этаж', 'undefined', 'undefined', 'undefined', 55.7425737, 37.5780491, 'https://mapbuildr.com/assets/img/markers/default.png']
  ];
  for (i = 0; i < locations.length; i++) {
    if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
    if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
    if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
    if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
    if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
    marker = new google.maps.Marker({
      icon: markericon,
      position: new google.maps.LatLng(locations[i][5], locations[i][6]),
      map: map,
      title: locations[i][0],
      desc: description,
      tel: telephone,
      email: email,
      web: web
    });
    link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
  }
  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function () {
      var currentlyVisible = false;
      return function (visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
        return currentlyVisible;
      };
    }());
    iw = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
      if (infoWindowVisible()) {
        iw.close();
        infoWindowVisible(false);
      } else {
        var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p></div>";
        iw = new google.maps.InfoWindow({content:html});
        iw.open(map,marker);
        infoWindowVisible(true);
      }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
      infoWindowVisible(false);
    });
  }
}

/*весь скрипт карты, управляемый гугловским API*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

window.onload = function () {

  /*--------Кнопка прокрутить вверх------------*/

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

  /*--------Кнопка прокрутить вверх------------*/

  /*---------Плавный переход по якорям----------*/
  
  $(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
    return false;
  });

  /*---------Плавный переход по якорям----------*/

};







