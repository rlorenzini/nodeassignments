const http = require('http');
// const hostname = '127.0.0.1'
const port = 3000;
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
var cors = require('cors')

// let fullnames = []

server.use(cors())
server.use(bodyParser.json())

server.get('/',function(req,res){
  res.send("Hello")
})
server.post('/fullname',(req,res)=>{
  console.log(req.body);
  let firstname = req.body.userFirstname
  let lastname = req.body.userLastname

  res.json({firstname: firstname, lastname: lastname})
})

server.listen(port,function(){
  console.log("server is running")
})
