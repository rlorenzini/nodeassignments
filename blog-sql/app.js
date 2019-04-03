const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mustacheExpress = require('mustache-express'),
  port = 3001;

let models = require('./models')

app.engine('mustache',mustacheExpress())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.set('views','./views')
app.set('view engine','mustache')

app.get('/',(req,res)=>{
  res.render('blogsList')
})

app.get('/blogsList',(req,res)=>{
  models.Blog.findAll().then((blog)=>{
    res.render('blogsList',{'blogslist':blog})
  })
})

app.post('/addBlog',(req,res)=>{
  let blogList = {
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
    id: req.body.id
  }
  models.Blog.create(blogList).then(()=>{
    res.redirect('blogsList')
  })

})

app.post('/deleteBlog',(req,res)=>{
  let blogListId = req.body.blogListId

  models.Blog.findOne({
    where:{
      id: blogListId
    }
  }).then((blog)=>{
      return blog.destroy()
  }).then(()=>{
    res.redirect('blogsList')
  })
})




app.listen(port,()=>console.log(`listening on port ${port}`))
