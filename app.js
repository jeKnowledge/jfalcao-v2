var app = {};

$(document).ready(function () {
  app.images = ['images/foto1.JPG', 'images/foto2.JPG', 'images/foto3.JPG', 'images/foto4.JPG', 'images/foto5.JPG', 'images/foto6.JPG', 'images/foto7.JPG'];
  app.floors = ['images/piso0.png', 'images/piso1.png', 'images/piso2.png', 'images/piso3.png', 'images/piso4.png'];

  app.currentImage = 0;
  app.currentFloor = 0;

  /* Preload all images and floors*/
  $.map(app.images, preloadImage);
  $.map(app.floors, preloadImage);
  changeImage('right');

});

/* Preloads a given image */
var preloadImage = function (url) {
  var img = new Image();
  img.src = url;
};

var changeImage = function (direction) {
  if (direction == 'right') {
    if (app.currentImage == app.images.length - 1) {
      app.currentImage = 0;
    } else {
      app.currentImage++;
    }
  } else if (direction == 'left') {
    if (app.currentImage === 0) {
      app.currentImage = app.images.length - 1;
    } else {
      app.currentImage--;
    }
  }

  var image = $('#images');
  $(image).fadeOut('slow', function () {
    $(image).css('background', "url('" + app.images[app.currentImage] + "') no-repeat center center fixed");
    $(image).css('background-size', 'cover');
    $(image).fadeIn();
  });
};

var changeFloor = function (direction) {
  if (direction == 'right') {
    if (app.currentFloor == app.floors.length - 1) {
      app.currentFloor = 0;
    } else {
      app.currentFloor++;
    }
  } else if (direction == 'left') {
    if (app.currentFloor === 0) {
      app.currentFloor = app.floors.length - 1;
    } else {
      app.currentFloor--;
    }
  }

  var floor = $('#floors');
  $(floor).fadeOut('slow', function () {
    $(floor).css('background', "url('" + app.floors[app.currentFloor] + "') no-repeat center center fixed");
    $(floor).css('background-size', 'cover');
    $(floor).fadeIn();
  });
};

/* FLOORS*/

$('#floors').on('swiperight', function (event) {
  changeFloor('left');
});

$('#floors').on('swipeleft', function (event) {
  changeFloor('right');
});

$('#floors').on('swipedown', function (event) {
  $(this).fadeOut(function () {
    $('#menu').fadeIn();
  });
});

$('#close-floor p').on('tap', function (event) {
  console.log('carregaste no + menu');
  event.stopPropagation();
  $('#floors').fadeOut(function () {
    $('#menu').fadeIn();
  });
});

/* IMAGENS */

$('#images').on('swipeleft', function (event) {
  changeImage('right');
});

$('#images').on('tap', function (event) {
  changeImage('right');
});

$('#images').on('swiperight', function (event) {
  changeImage('left');
});

$('#images').on('swipeup', function (event) {
  $(this).fadeOut(function () {
    $('#menu').fadeIn();
  });
});


$('#menu').on('swipedown', function (event) {
  $(this).fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#sala').on('tap', function (event) {
  $('#menu').fadeOut(function () {
    changeFloor('right', true);
  });
});

$('#servico').on('tap', function (event) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#horario').on('tap', function (event) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#professor').on('tap', function (event) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#close-menu').find('p').on('tap', function (event) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});
