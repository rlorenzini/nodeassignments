const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  jwt = require('jsonwebtoken'),
  port = 8080;

// var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

// const http = require('http');

// const hostname = '127.0.0.1';
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.post('/login',(req,res)=>{
  let username=req.body.username
  let password=req.body.password
  console.log(username, password)
  let user = users.find((u)=>{
    return u.username === username && u.password === password
  })
  if(user){
    jwt.sign({username:username},'secret',
  function(err,token){
    console.log(token)
    if(token){
      res.json({token:token})
    }else{
      res.status(500).json({message:'unable to generate token'})
    }
  })
  }
})

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
