const {app , BrowserWindow, Menu} = require('electron');
const path = require('path')
const firstrun = require('electron-first-run')


function createWindow(){
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: false,
        icon: "contents/img/logo.png",
        title: "Wolfstart",
        fullscreen: false,
        webPreferences:{
            nodeIntegration: true
        }
        
    })

    var cmd = process.argv[1];

   
    // A modifier 
    if (cmd == '--squirrel-firstrun') {
        window.loadURL(path.join(__dirname, "contents/start.html"))
     }else{
        window.loadURL(path.join(__dirname, "contents/connexion.html"))

     }
 
}



app.whenReady().then( () => {
    createWindow();
    
    app.on('activate', function(){
     
     createWindow()   
    })

    
})

Menu.setApplicationMenu(null)


