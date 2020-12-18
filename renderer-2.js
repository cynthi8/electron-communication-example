const {ipcRenderer} = require('electron');
ipcRenderer.on('message', (event, message) => console.log(message));

const sendMessageButton = document.getElementById('send-message');

sendMessageButton.addEventListener('click', event => {
	ipcRenderer.send('reply', `Hi! This is a message from the second window that is being sent via main`);
	window.close();
});
