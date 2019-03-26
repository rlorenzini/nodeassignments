const http = require('http');
// const hostname = '127.0.0.1'
const port = 3000;
const express = require('express')
const mustacheExpress = require('mustache-express')
const server = express()
const bodyParser = require('body-parser')
var cors = require('cors')

server.engine('mustache',mustacheExpress())
server.set('views','./views')
server.set('view engine','mustache')
server.use(cors())
server.use(bodyParser.json())

// server.get('/',(req,res)=>{
//   res.render('hello')
// })
server.get('/home',(req,res)=>{
  res.render('home.mustache',{name: "Richard"})
})



server.listen(port,function(){
  console.log("server is running")
})
