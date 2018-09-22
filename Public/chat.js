const socket = io.connect('http://localhost:3000')

//Query DOM

const message = document.getElementById('message')
const handle = document.getElementById('handle')
const btn = document.getElementById('send')
const output = document.getElementById('output')

//Emit Event

btn.addEventListener('click', () => {
  //emmit a message down the socket to the server
  socket.emit('chat', {
    message: message.value,
    handle: handle.value,
  })
})

//listen to even
socket.on('chat', (data) => {
  output.innerHTML += `<p><strong> ${data.handle} </strong>: ${data.message} </p>`
})