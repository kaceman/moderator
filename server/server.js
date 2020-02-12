const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');

const APIKeys = [
    {
        key: 'aze',
        banned: false
    }
];
const filepath = 'file.txt';

io.on('connection', function(socket){
    console.log('A client is connected');

    fs.watchFile(filepath, (curr, prev) => {
        APIKeys.forEach((APIKey) => {
            if (!APIKey.banned) {
                socket.emit('moderator' + APIKey.key, 'Moderator Detected');
            }
        });
    });

    socket.on('hello', function(data){
        console.log(data);
    });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});