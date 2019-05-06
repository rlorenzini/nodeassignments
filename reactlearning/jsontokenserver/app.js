const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  jwt = require('jsonwebtoken'),
  PORT = 8080;

const users = [
  {username:"richard",password:"password"}
]

app.use(cors())
app.use(bodyParser.json())

function authenticate(req,res,next){
  let headers = req.headers["authorization"]

  let token = headers.split(' ')[1]

  jwt.verify(token,'secret',(err,decoded)=>{
    if(decoded){
      if(decoded.username){
        next()
      }else{
        res.status(401).json({message:'Token invalid'})
      }
    }else{
      res.status(401).json({message:'Token incalid'})
    }
  })
  console.log(headers)
  console.log(decoded)
}

app.get('/hello',authenticate,(req,res)=>{
  res.send("hello world")
})

app.post('/login',(req,res)=>{
  let username=req.body.username
  let password=req.body.password
  console.log(username, password)
  
  let user = users.find((u)=>{
    return u.username == username && u.password == password
  })
  if(user){
    jwt.sign({username:username},'secret',
  function(err,token){
    if(token){
      res.json({token:token})
    }else{
      res.status(500).json({message:'unable to generate token'})
    }
  })
  }
})

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
