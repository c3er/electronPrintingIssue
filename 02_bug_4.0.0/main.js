const electron = require("electron")

electron.app.on("ready", () => {
    mainWindow = new electron.BrowserWindow()
    mainWindow.loadFile("index.html")

    electron.Menu.setApplicationMenu(electron.Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "Print",
                    accelerator: "Ctrl+P",
                    click() {
                        mainWindow.webContents.print()
                    }
                }
            ]
        }
    ]))
})
