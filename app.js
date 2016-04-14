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
  console.log(app.currentImage);
  if (direction == 'right') {
    console.log(app.currentImage);
    if (app.currentImage == app.images.length - 1) {
      app.currentImage = 0;
    } else {
      app.currentImage++;
    }
    console.log(app.currentImage);
  } else if (direction == 'left') {
    if (app.currentImage === 0) {
      app.currentImage = app.images.length - 1;
    } else {
      app.currentImage--;
    }
  }
  console.log(app.currentImage);
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

/* FLOORS */

$('floors').bind(function () {
  if ('tap') {
    changeFloor('right');
  } else if ('swiperight') {
    changeFloor('left');
  } else if ('swipeleft') {
    changeFloor('right');
  } else if ('swipedown') {
    $(this).fadeOut(function(){
      $('#menu').fadeIn();
    });
  }
});



$('#close-floor p').bind('tap', function () {
  console.log('carregaste no + menu');
  e.stopPropagation();
  $('#floors').fadeOut(function () {
    $('#menu').fadeIn();
  });
});



/* IMAGENS */

$('#images').bind('swipeleft', function () {
  changeImage('right');
});

$('#images').bind('tap', function () {
  changeImage('right');
});

$('#images').bind('swiperight', function () {
  changeImage('left');
});

$('#images').bind('swipeup', function () {
  $(this).fadeOut(function () {
    $('#menu').fadeIn();
  });
});

$('#menu').bind('swipedown', function () {
  $(this).fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#sala').bind('tap', function () {
  $('#menu').fadeOut(function () {
    changeFloor('right', true);
  });
});

$('#servico').bind('tap', function () {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#horario').bind('tap', function () {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#professor').bind('tap', function () {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});

$('#close-menu').find('p').bind('tap', function () {
  $('#menu').fadeOut(function () {
    $('#images').fadeIn();
  });
});
