const { app, BrowserWindow,ipcMain } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {//开启node
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  })

  win.loadFile('app.html')

   // 监听来自渲染进程的消息
   ipcMain.handle('get-install-dir', () => {
    return app.getAppPath();
  });
}

app.whenReady().then(() => {
  createWindow()
})