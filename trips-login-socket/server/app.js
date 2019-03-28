const express = require('express'),
  server = express(),
  mustacheExpress = require('mustache-express'),
  // bodyParser = require('body-parser'),
  path = require('path'),
  uuid = require('uuid/v1'),
  port = 3000;

var http = require('http').Server(server),
  io = require('socket.io')(http)

io.on('connection',(socket)=>{
  console.log("user is connected")
  socket.on('chat',(message)=>{
    console.log(message)
    io.emit('chat', {username: currentUser.username, message: message})
  })
})
server.use(express.static('public'))
var session = require('express-session')
server.use(session({
  secret: 'eagle',
  resave: false,
  saveUninitialized: false
}))

let trips = []
let users = []
let currentUser = {}

const Trip = require('./trip')
const User = require('./user')

const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({extended:false}))
server.engine('mustache',mustacheExpress())
server.set('views','./views')
server.set('view engine', 'mustache')

server.get('/login',(req,res)=>{
  res.render('login')
})
server.get('/index',(req,res)=>{
  res.render('index',{username:req.session.username})
})
function validateLogin(req,res,next){
  if(req.session.username){
    next()
  }else{
    res.redirect('/login')
  }
}

server.all('/views/*',validateLogin,(req,res,next)=>{
  next()
})
server.post('/register',(req,res)=>{
  let username = req.body.username
  let password = req.body.password
  let newUser = new User(username,password)
  users.push(newUser)
  console.log(users)
  res.redirect('/login')
})
server.post('/login',(req,res)=>{
  let username = req.body.username
  let password = req.body.password

  currentUser = users.find((user)=>{
    if(user.username == username && user.password == password){
      return user.username
    }else{
      res.redirect('/login-error')
    }
  })
  // var hour = 3600000
  // req.session.cookie.expires = new Date(Date.now() + hour)
  // req.session.cook.maxAge = hour
  console.log(currentUser)
  res.redirect('trips')
})

server.get('/login-error',(req,res)=>{
  res.render('/login-error')
})
server.post('/logout',(req,res)=>{
  req.session.destroy()
  currentUser = {}
  res.redirect('/login')
  console.log(currentUser)
})
server.get('/',(req,res)=>{
  res.render('register')
})
server.get('/trips',(req,res)=>{
  res.render('trips',{tripListing:trips})
})
server.post('/deleteTrip',(req,res)=>{
  let tripId = req.body.tripId
  currentUser.trips = currentUser.trips.filter((trip)=>{
    return trip.tripId != tripId
  })
  res.render('trips',{tripListing:currentUser.trips})
})

server.post('/trips',(req,res)=>{
  let tripId = uuid()
  let title = req.body.title
  let leaveTime = req.body.leaveTime
  let returnTime = req.body.returnTime
  let imageURL = req.body.imageURL
  let newTrip = new Trip(tripId,title,leaveTime,returnTime,imageURL)
  currentUser.trips.push(newTrip)
  res.render('trips',{tripListing:currentUser.trips})
})

http.listen(port,()=>console.log(`server is running on port ${port}`))
