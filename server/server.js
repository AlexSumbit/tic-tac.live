const config = {
    port: 8080
};

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


let clientCount = 0;

let queue = "";


server.listen(config.port, () => {
    console.log('Server listening at port %d', config.port);
});

io.on("connection", (socket) => {
    console.info(socket.id, " Is Connected");
    clientCount ++;

    socket.on("disconnect", () => {
        console.info(socket.id, " Has Disconnected");

        clientCount --;
    });
});