var app = {};

document.getElementById('images').style.backgroundImage="url(foto1.JPG)";


$(document).ready(function () {
  app.images = ['foto1.JPG', 'foto2.JPG', 'foto3.JPG', 'foto4.JPG','foto5.JPG','foto6.JPG','foto7.JPG'];
  app.currentImage = 0;


  /* Preload all images */
  $(app.images).each(function (index, value) {
    preloadImage(value);
  });
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
      print(app.currentImage)
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
    $('#planta').fadeIn();
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

$('#planta').bind('swipedown', function (e) {
   $('#planta').fadeOut(function () {
    $('#menu').fadeIn();
  }); 
});

