var WebSocketServer = require('ws').Server
  , server = new WebSocketServer({ port: 8001 });

server.on('connection', function (socket) {
    socket.on('message', function (message) {
        console.log('received: ' + message);
        socket.send('Server received: ' + message + ' ~~ ' + Math.random().toPrecision(2));
    });
    socket.send('Welcome!');
});
