const config = {
    port: 8080
};

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


let clientCount = 0;

let queue = "";


function message(name, data) {
    return {
        name: name,
        data: data
    }
}


function sendClientCount() {
    io.emit("message", message("client-count", clientCount));
}

function startGame(socket) {
    if(queue != "") {
        socket.join(queue);
        console.log("Join room: ", queue);
        io.in(queue).emit("message", message("game-started", {}));
        queue = "";
    } else {
        queue = socket.id;
        socket.join(queue);
        console.log("Create room: ", queue);
    }
}


server.listen(config.port, () => {
    console.log('Server listening at port %d', config.port);
});

io.on("connection", (socket) => {
    clientCount ++;
    sendClientCount();

    socket.on("message", (event) => {

        switch (event.name) {
            case "start-game": startGame(socket); break;
            case "turn": break;
        }
    });
    

    socket.on("disconnecting", (reason) => {
        clientCount --;
        sendClientCount();

        for(let room in socket.rooms) {
            io.to(room).emit("message", message("disconnected", {}));
        }
    });
});