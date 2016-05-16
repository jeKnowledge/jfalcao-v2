let app = {};
let ipcRenderer = require('electron').ipcRenderer;


$(document).ready(function () {
  app.images = ['images/foto1.JPG', 'images/foto2.JPG', 'images/foto3.JPG', 'images/foto4.JPG', 'images/foto5.JPG', 'images/foto6.JPG', 'images/foto7.JPG'];
  app.floors = ['images/piso0.png', 'images/piso1.png', 'images/piso2.png', 'images/piso3.png', 'images/piso4.png'];
  app.schedules = ['images/schedule0.jpg', 'images/schedule1.jpg', 'images/schedule2.jpg'];
  
  app.currentImage = 0;
  app.currentFloor = 0;
  app.currentSchedule = 0;
  
  /* Preload all images and floors*/
  $.map(app.images, preloadImage);
  $.map(app.floors, preloadImage);
  $.map(app.schedules, preloadImage);

  changeImage('right');
});

/* Preloads a given image */
function preloadImage (url) {
  let img = new Image();
  img.src = url;
}

function changeImage (direction) {
  if (direction === 'right') {
    if (app.currentImage === app.images.length - 1) {
      app.currentImage = 0;
    } else {
      app.currentImage++;
    }
  } else if (direction === 'left') {
    if (app.currentImage === 0) {
      app.currentImage = app.images.length - 1;
    } else {
      app.currentImage--;
    }
  }

  let image = $('#images');
  $(image).fadeOut('slow', () => {
    $(image).css('background', "url('" + app.images[app.currentImage] + "') no-repeat center center fixed");
    $(image).css('background-size', 'cover');
    $(image).fadeIn();
  });
}

function changeFloor (direction) {
  if (direction === 'right') {
    if (app.currentFloor === app.floors.length - 1) {
      app.currentFloor = 0;
    } else {
      app.currentFloor++;
    }
  } else if (direction === 'left') {
    if (app.currentFloor === 0) {
      app.currentFloor = app.floors.length - 1;
    } else {
      app.currentFloor--;
    }
  }

  let floor = $('#floors');
  $(floor).fadeOut('slow', () => {
    $(floor).css('background', "url('" + app.floors[app.currentFloor] + "') no-repeat center center fixed");
    $(floor).css('background-size', 'cover');
    $(floor).fadeIn();
  });
}

function changeSchedule (direction) {
  if (direction === 'right') {
    if (app.currentSchedule === app.schedules.length - 1) {
      app.currentSchedule = 0;
    } else {
      app.currentSchedule++;
    }
  } else if (direction === 'left') {
    if (app.currentSchedule === 0) {
      app.currentSchedule = app.schedules.length - 1;
    } else {
      app.currentSchedule--;
    }
  }

  let schedule = $('#schedules');
  $(schedule).fadeOut('slow', () => {
    $(schedule).css('background', "url('" + app.schedules[app.currentSchedule] + "') no-repeat center center fixed");
    $(schedule).css('background-size', 'cover');
    $(schedule).fadeIn();
  });
}

/* FLOORS*/
$('#floors').on('swiperight', function (event) {
  changeFloor('left');
});

$('#floors').on('swipeleft', function (event) {
  changeFloor('right');
});

$('#floors').on('swipedown', function (event) {
  $(this).fadeOut(() => $('#menu').fadeIn());
});

$('#close-floor p').on('tap', function (event) {
  event.stopPropagation();
  $('#floors').fadeOut(() => $('#menu').fadeIn());
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
  $(this).fadeOut(() => $('#menu').fadeIn());
});

$('#menu').on('swipedown', function (event) {
  $(this).fadeOut(() => $('#images').fadeIn());
});

/* Schedules */
$('#schedules').on('swipeleft', function (event) {
  changeSchedule('right');
});

$('#schedules').on('swiperight', function (event) {
  changeSchedule('left');
});

$('#schedules').on('swipedown', function (event) {
  $(this).fadeOut(() => $('#menu').fadeIn());
});

/* Menu options click*/
$('#sala').on('tap', function (event) {
  $('#menu').fadeOut(() => changeFloor('right', true));
});

$('#horario').on('tap', function (event) {
  $('#menu').fadeOut(() => changeSchedule('right', true));
});

$('#servico').on('tap', function (event) {
  $('#menu').fadeOut(() => $('#images').fadeIn());
});

$('#professor').on('tap', function (event) {
  $('#menu').fadeOut(() => $('#images').fadeIn());
});

$('#close-menu').find('p').on('tap', function (event) {
  $('#menu').fadeOut(() => $('#images').fadeIn());
});

$('#browser').on('tap', function (event) {
  ipcRenderer.send('asynchronous-message', 'open-browser-window');
});
