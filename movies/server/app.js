const express = require('express'),
  mustacheExpress = require('mustache-express'),
  bodyParser = require('body-parser'),
  server = express(),
  port = 3000,
  path = require('path'),
  uuid = require('uuid/v1'),
  movieRoutes = require('./routes/movies'),
  VIEWS_PATH = path.join(__dirname, '/views');

console.log(VIEWS_PATH)
var cors = require('cors')
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))
server.use('/movies', movieRoutes)
server.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
server.set('views','./views')
server.set('view engine','mustache')

let movies = []

server.get('/movies',(req,res)=>{
  res.render('index',{movies:movies})
})

server.listen(port,()=>{console.log(`Server is running on port ${port}.`)})
