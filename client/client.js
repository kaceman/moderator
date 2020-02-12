const io = require('socket.io-client');
const fs = require('fs');

const url_server = 'http://localhost:8080';
const APIKEY = 'aze';

const socket = io(url_server);
const filepath = 'file.txt';

socket.on('moderator' + APIKEY, (data) => {
    console.log('Moderator detected');
    fs.writeFile(filepath, '1', () => {});
});