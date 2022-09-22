const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 670,
        minHeight: 670,
        minWidth: 400,
        maxHeight: 670,
        maxWidth: 400,
        titleBarStyle: "hidden",
        titleBarOverlay: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // mainWindow.loadURL("http://localhost:3000");
    // win.loadFile("index.html");

    const startUrl =
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, "../index.html"),
            protocol: "file:",
            slashes: true,
        });
    mainWindow.loadURL(startUrl);

    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
