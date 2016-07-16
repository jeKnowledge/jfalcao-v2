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
  mainWindow = new BrowserWindow({
    frame: false,
    fullscreen: true,
    movable: false,
    alwaysOnTop: true
  });

  globalShortcut.register('Control+Alt+Delete', () => {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Control+F4', () => {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Control+Escape', () => {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Alt+Tab', () => {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Super', () => {
    console.log('Invalid Key Combination');
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
    browserWindow = new BrowserWindow({
      frame: false,
      fullscreen: true,
      movable: false,
      alwaysOnTop: true
    });
  }

globalShortcut.register('Control+Alt+Delete', () => {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Control+Escape', () => {
    console.log('Invalid Key Combination');
  });
  globalShortcut.register('Alt+Tab', () => {
    console.log('Invalid Key Combination');
  });
  globalShorcut.register('Super', () => {
    console.log('Invalid Key Combination');
  });

  browserWindow.loadURL('file://' + __dirname + '/browser/browser.html');
  browserWindow.webContents.openDevTools();
})
