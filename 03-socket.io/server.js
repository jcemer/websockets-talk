var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

server.listen(8003);

app.configure(function(){
  app.use(express.static(__dirname));
});

io.on('connection', function (socket) {
    socket.on('message', function (message) {
        socket.emit('response', 'Server received: ' + message.num);
    });
    socket.emit('welcome', 'Welcome!');
});
