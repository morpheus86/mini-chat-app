const socket = io.connect('http://localhost:3000')

//Query DOM

const message = document.getElementById('message')
const handle = document.getElementById('handle')
const btn = document.getElementById('send')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

//Emit Event

btn.addEventListener('click', () => {
  //emmit a message down the socket to the server
  socket.emit('chat', {
    message: message.value,
    handle: handle.value,
  })
})
message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value)
})
//listen to event
socket.on('chat', (data) => {
  feedback.innerHTML = ''
  output.innerHTML += `<p><strong> ${data.handle}: </strong>: ${data.message} </p>`
})

socket.on('typing', (data) => {
  feedback.innerHTML = `<p><em> ${data} is typing a message...</em></p>`
})