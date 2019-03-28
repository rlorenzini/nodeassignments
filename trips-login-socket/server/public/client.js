let socket = io();
let btnSend = document.getElementById("btnSend")
let chatMessageTextBox = document.getElementById("chatMessageTextBox")
let chatMessagesList = document.getElementById("chatMessagesList")

btnSend.addEventListener('click',()=>{
  let message = chatMessageTextBox.value
  socket.emit('chat',message)
})
socket.on('chat',(message)=>{
  console.log(message)
  let chatMessageLI = document.createElement("li")
  chatMessageLI.innerHTML = Object.values(message)
  chatMessagesList.appendChild(chatMessageLI)
})
