const io = require('socket.io-client');
const fs = require('fs');
const inquirer = require('inquirer');

console.log('Hi, Welcome to Anti-Moderator');

const choices = [
    {
        name: 'Oshimo',
        value: 'http://93.115.97.149:8080',
    },
    {
        name: 'Brutas',
        value: 'http://93.115.97.149:8080',
    },
]

inquirer.prompt([
    {
        type: 'list',
        name: 'url_server',
        message: 'Choose a server',
        choices: choices
    }
]).then(answers => {
    const url_server = answers.url_server;
    const APIKEY = 'aze';

    const socket = io(url_server);
    const filepath = 'file.txt';

    socket.on('moderator' + APIKEY, (data) => {
        console.log('Moderator detected');
        fs.writeFile(filepath, '1', () => {});
    });
});
