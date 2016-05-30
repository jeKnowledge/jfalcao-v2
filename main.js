const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;
const ipcMain = electron.ipcMain;


let mainWindow;
let browserWindow;

crashReporter.start({
  productName: 'jeKnowledge',
  companyName: 'jeKnowledge',
  submitURL: 'https://jeknowledge.pt',
  autoSubmit: false
});

function createWindow () {
  mainWindow = new BrowserWindow({fullscreen: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('asynchronous-message', function(event, arg) {
  if (arg === 'close-main-window') {
    app.quit();
  }
  else if ('open-browser-window') {
    browserWindow = new BrowserWindow({fullscreen: true});
  }

  browserWindow.loadURL('file://' + __dirname + '/browser/browser.html');
  browserWindow.webContents.openDevTools();
})
