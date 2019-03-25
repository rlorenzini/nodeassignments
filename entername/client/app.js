//client side JS

let sendBtn = document.getElementById('sendBtn')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')

sendBtn.addEventListener('click',function(){
  let firstname = document.getElementById('firstname').value
  let lastname = document.getElementById('lastname').value

  fetch('http://localhost:3000/fullname', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userFirstname: firstname,
      userLastname: lastname,
    })
  }).then(response => {
    return response.json()
  }).then(json => console.log(json))
})
