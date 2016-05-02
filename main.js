const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = require('ipc')

let mainWindow = null;
let browserWindow = null;

crashReporter = require('crash-reporter');
crashReporter.start({
  productName: 'jeKnowledge',
  companyName: 'jeKnowledge',
  submitUrl: 'https://jeknowledge.pt',
  autoSubmit: false
});

function createWindow () {
  mainWindow = new BrowserWindow({fullscreen: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});


ipc.on('close-main-window', function() {
  app.quit();
});

ipc.on('open-browser-window', function() {
  browserWindow = new BrowserWindow({
    fullscreen: true
  });

  browserWindow.loadURL('file://' + __dirname + '/electron-browser/browser.html');
});
