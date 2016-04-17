const app = require('electron').app;
const window = require('electron-window');

crashReporter = require('crash-reporter');
crashReporter.start({
  productName: 'jeKnowledge',
  companyName: 'jeKnowledge',
  submitUrl: 'https://jeknowledge.pt',
  autoSubmit: false
});

app.on('ready', function () {
  var mainWindow = window.createWindow({fullscreen: true,});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
});
