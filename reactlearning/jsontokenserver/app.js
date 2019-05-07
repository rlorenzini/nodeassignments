const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  jwt = require('jsonwebtoken'),
  models = require('./models')
  PORT = 8080;

// const users = [
//   {username:"richard",password:"password"}
// ]

app.use(session({
  secret: "fmgffndmf",
  resave: false,
  saveUninitialized: false
}))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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
      res.status(401).json({message:'Token invalid'})
    }
  })
  console.log(headers)
  console.log(decoded)
}

app.get('/username',authenticate,(req,res)=>{
  res.send(currentUser[currentUser.length-1])
})

app.post('/register',(req,res)=>{
  let username=req.body.username
  let password=req.body.password
  let user = models.User.build({
    username:username,
    password:password
  })
  user.save()
  // users.push(user)
})

app.post('/login',(req,res)=>{
  let username=req.body.username
  let password=req.body.password
  console.log(username, password)

  models.User.findOne({
    where:{
      username:username
    }
  }).then((user)=>{

  // let user = users.find((u)=>{
  //   return u.username == username && u.password == password
  // })
  if(user){
    jwt.sign({username:username},'secret',
  function(err,token){
    if(token){
      res.json({username:username,token:token})
    }else{
      res.status(500).json({message:'unable to generate token'})
    }
  })
  }
  })
})

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
