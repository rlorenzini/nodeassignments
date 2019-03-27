const express = require('express'),
  mustacheExpress = require('mustache-express'),
  bodyParser = require('body-parser'),
  router = express.Router(),
  port = 3000,
  path = require('path'),
  uuid = require('uuid/v1');

let movies = []
//title, description, genre, posterURL
router.get('/',(req,res)=>{
  res.render('index',{movies : movies})
})
router.get('/movies',(req,res)=>{
  res.render('index',{movies : movies})
})
router.get('/add-movie',(req,res)=>{
  res.render('add-movie')
})
router.post('/add-movie',(req,res)=>{
  let movieId = uuid()
  let movieTitle = req.body.movieTitle
  let movieDescription = req.body.movieDescription
  let movieGenre = req.body.movieGenre
  let moviePoster = req.body.moviePoster

  let movie = {movieId: movieId, movieTitle: movieTitle, movieDescription: movieDescription, movieGenre: movieGenre, moviePoster: moviePoster}
  movies.push(movie)
  res.redirect('/movies')
})

router.post('/delete-movie',(req,res)=>{
  let movieId = req.body.deleteMovie
  movies = movies.filter((movie)=>{
    return movie.movieId != movieId
  })
  res.redirect('/movies')
})

module.exports = router
