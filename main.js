const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    maxWidth: 800,
    maxHeight: 600,
    minHeight: 600,
    minWidth: 800,

  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});


