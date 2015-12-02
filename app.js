var app = {};

document.getElementById('images').style.backgroundImage="url('foto1.JPG')";

$(document).ready(function () {
  app.images = ['foto1.JPG', 'foto2.JPG', 'foto3.JPG', 'foto4.JPG','foto5.JPG','foto6.JPG','foto7.JPG'];
  app.floors = ['piso1.png', 'piso4.png'];

  app.currentImage = 0;
  app.currentFloor = 0;

  /* Preload all images and floors*/
  $.map(app.images, preloadImage);
  $.map(app.floors, preloadImage);
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
  } else {
    if (app.currentImage == 0) {
      app.currentImage = app.images.length - 1;
    } else {
      app.currentImage--;
    }
  }

  var image = $('#images');

  $(image).fadeOut('slow', function () {
    $(image).css('background', "url('" + app.images[app.currentImage] + "') no-repeat center center fixed");
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

  console.log(app.currentFloor);

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

/*
 $('#floors').bind('swipedown', function (e) {
 $(this).fadeOut(function () {
 $('#menu').fadeIn();
 });
 });*/





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
