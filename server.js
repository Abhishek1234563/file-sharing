const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static(path.join(__dirname, 'public')));
io.on('connection', socket => {
    console.log('A user connected: ' + socket.id);
    socket.on('joinRoom', roomId => {
        socket.join(roomId);
        console.log(`Socket ${socket.id} joined room ${roomId}`);
    });
    socket.on('sendFile', data => {
        console.log(`Received file ${data.fileName} from ${socket.id}`);
        socket.to(data.roomId).emit('receiveFile', data);
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
