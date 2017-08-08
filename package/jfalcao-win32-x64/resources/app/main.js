const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;
const ipcMain = electron.ipcMain;
const globalShortcut = electron.globalShortcut;

let mainWindow;
let browserWindow;

crashReporter.start({
  productName: 'jeKnowledge',
  companyName: 'jeKnowledge',
  submitURL: 'https://jeknowledge.pt',
  autoSubmit: false
});

function createWindow () {
  blockKeys();

  mainWindow = new BrowserWindow({
    frame: false,
    fullscreen: true,
    movable: false,
    alwaysOnTop: true
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
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
    blockKeys();
    
    browserWindow = new BrowserWindow({
      frame: false,
      fullscreen: true,
      movable: false,
      alwaysOnTop: true
    });
  }

  browserWindow.loadURL('file://' + __dirname + '/browser/browser.html');
  browserWindow.webContents.openDevTools();
})

function blockKeys() {
  globalShortcut.register('Ctrl+Alt+Delete', function() {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Alt+F4', function() {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Ctrl+A', function() {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Alt+Tab', function() {
    console.log('Invalid Key Combination');
  });
}
