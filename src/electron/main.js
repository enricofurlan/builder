const {
  app,
  BrowserWindow,
  Menu
} = require('electron');

// node js style import from module.exports
const foo = require('./foobar.js');
foo();
let win;

function createWindow() {


  // Create the browser window.
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/../,,/dist/assets/logo.png`
  })
  win.loadURL(`file://${__dirname}/../../dist/index.html`)
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })



  const menuTemplate = [{
    label: app.getName(),
    submenu: [{
      label: 'Foo!',
      click: _ => {
        console.log('foo!');
      }
    }]
  }];
  const menu = Menu.buildFromTemplate(menuTemplate);
  //Menu.setApplicationMenu(menu);



}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
