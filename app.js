var app = {};


$(document).ready(function () {
  app.images = ['foto1.JPG', 'foto2.JPG', 'foto3.JPG', 'foto4.JPG','foto5.JPG','foto6.JPG','foto7.JPG'];
  app.floors = ['piso0.png', 'piso1.png', 'piso2.png', 'piso3.png', 'piso4.png'];

  app.currentImage = 0;
  app.currentFloor = 0;

  /* Preload all images and floors*/
  $.map(app.images, preloadImage);
  $.map(app.floors, preloadImage);
  changeImage('right', true);

});


/* Preloads a given image */
var preloadImage = function (url) {
  var img = new Image();
  img.src = url;
};

var changeImage = function (direction, firstTime) {
  if (direction == 'right' && !firstTime) {
    if (app.currentImage == app.images.length - 1) {
      app.currentImage = 0;
    } else {
      app.currentImage++;
    }
  } else if (direction == 'left' && !firstTime) {
    if (app.currentImage == 0) {
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

var changeFloor = function (direction, firstTime) {
  if (direction == 'right' && !firstTime) {
    if (app.currentFloor == app.floors.length - 1) {
      app.currentFloor = 0;
    } else {
      app.currentFloor++;
    }
  } else if (direction == 'left' && !firstTime) {
    if (app.currentFloor == 0) {
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

/* FLOORS */

$('#floors').bind('tap', function (e) {
  changeFloor('right');
});

$('#floors').bind('swiperight', function (e) {
  changeFloor('left');
});

$('#floors').bind('swipeleft', function (e) {
  changeFloor('right');
});

$('#floors').bind('swipedown', function(e) {
  $(this).fadeOut(function(){
    $('#menu').fadeIn();
  });
});

$('#close-floor p').bind('tap', function(e){
  $(this).fadeOut(function(){
    $('#menu').fadeIn();
  });
});



/* IMAGENS */


$('#images').bind('swipeleft', function (e) {
  changeImage('right');
});

$('#images').bind('tap', function (e) {
  changeImage('right');
});

$('#images').bind('swiperight', function (e) {
  changeImage('left');
});

$('#images').bind('swipeup', function (e) {
  $(this).fadeOut(function () {
    $('#menu').fadeIn();
  });
});

$('#menu').bind('swipedown', function (e) {
  $(this).fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#sala').bind('tap', function (e) {
  $('#menu').fadeOut(function () {
    changeFloor('right', true);
  });
});

$('#servico').bind('tap', function (e) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#horario').bind('tap', function (e) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#professor').bind('tap', function (e) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#close-menu p').bind('tap', function (e) {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});
