//NOT FUNCTIONAL; POSTGRES ISSUES 


const express = require('express'),
  mustacheExpress = require('mustache-express'),
  bodyParser = require('body-parser'),
  pgp = require('pg-promise')(),
  server = express();

const connectionString = 'postgres://localhost:3000/postgres'
const db = pgp(connectionString)

console.log(db)

server.use(bodyParser.urlencoded({extended:false}))
server.engine('mustache',mustacheExpress())
server.set('views','./views')
server.set('view engine','mustache')

server.post('delete-post',(req,res)=>{
  let postId = parseInt(req.body.postId)
  db.none('DELETE FROM postgres WHERE postId = $1;',[postId])
  .then(()=>{
    res.redirect('/view-all-posts')
  })
})

server.get('/view-all-posts',(req,res)=>{
  db.any('SELECT id,title,body FROM posts;')
  .then((posts)=>{
    res.render('view-all-posts',{posts:posts})
  })
})

server.post('/add-new-post',(req,res)=>{
  let title = req.body.title
  let body = req.body.body

  db.one('INSERT INTO posts(title,body) VALUES($1,$2) RETURNING postId;', [title,body])
  .then((data)=>{
    console.log(data)
    console.log("SUCCESS")
  }).catch(error=>console.log(error))
  res.send('hello world')
})

server.get('/add-new-post',(req,res)=>{
  res.render('add-new-post')
})

server.listen(5432,()=>{
  console.log("server is on 5432, DB 3000.")
})
