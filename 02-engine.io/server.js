var express = require('express');
var app = express();
var server = require('http').Server(app).listen(8002);
var engine = require('engine.io');
var io = engine.attach(server);

io.on('connection', function (socket) {
    socket.on('message', function (message) {
        console.log('received: ' + message);
        socket.send('Server received: ' + message);
    });
    socket.send('Welcome!');
});

app.configure(function(){
  app.use(require('express').static(__dirname));
});
