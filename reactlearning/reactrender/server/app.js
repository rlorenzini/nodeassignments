const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  cors = require('cors')
  port = 8080;

  let books = [
    {
      title: "Book 1",
      genre: "Tech"
  },
  {
    title: "Book 2",
    genre: "Fantasy"
  }
  ]

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/books', (req,res) => {
  let response = {
    books: books
  }
  res.json(response)
})

app.post('/api/books', (req,res) => {
  let title = req.body.title
  let genre = req.body.genre

   books.push({title: title, genre: genre})
})

app.listen(port,()=>{
  console.log(`server is on ${port}.`)
})
