const express = require('express')
const socket = require('socket.io')
const app = express();
const server = app.listen(3000, () => {
  console.log('listening on 3000')
});

app.use(express.static('public'))

const io = socket(server)
io.on('connection', (socket) => {
  console.log('Connection made', socket.id);

  socket.on('chat', (data) => {
    //when you receive the message from the client to the server, 
    //we  want to send it out to all the different clients connected to the server.
    io.sockets.emit('chat', data)
  })
  socket.on('typing', (data) => {
    //emit to every single client except the person typing
    socket.broadcast.emit('typing', data)
  })
})