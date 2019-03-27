const express = require('express'),
  mustacheExpress = require('mustache-express'),
  bodyParser = require('body-parser'),
  server = express(),
  port = 3000;

var cors = require('cors')
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))
server.engine('mustache',mustacheExpress())
server.set('views','./views')
server.set('view engine','mustache')

server.use('/css',express.static('css'))

let trips = []
//unique id, title, image, departure, return

server.get('/',(req,res)=>{
  res.render('index',{trips: trips})
})

server.get('/trips',(req,res)=>{
  res.render('trips',{tripsList: trips, count: trips.length})
})

server.get('/add-trip',(req,res)=>{
  res.render('add-trip')
})

server.post('/add-trip',(req,res)=>{
  let tripId = guid()
  let title = req.body.title
  let image = req.body.image
  let departureTime = req.body.departureTime
  let returnTime = req.body.returnTime
  let trip = {tripId: tripId, title: title, image: image, departureTime: departureTime, returnTime: returnTime}
  trips.push(trip)
  res.redirect('/trips')
  console.log('hello')
})

function guid(){
  function s4(){
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


server.post('/deleteTrip',(req,res)=>{
  let tripId = req.body.deletedTrip
  trips = trips.filter((trip)=>{
    return trip.tripId != tripId
  })
  res.redirect('/trips')
})


server.listen(port,()=>{console.log(`running on port ${port}`)})
