const {ipcRenderer} = require('electron');

const openSecondWindowButton = document.getElementById('open-second-window');

ipcRenderer.on('reply', (event, message) => {
	console.log(message);
});

openSecondWindowButton.addEventListener('click', (event) => {
	ipcRenderer.invoke('createSecondWindow').then( webContentsId => {
		ipcRenderer.sendTo(webContentsId, 'message', 'This is a message from the renderer process to the second window.');
	});
});
