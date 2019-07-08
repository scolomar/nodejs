const express = require('express') 
const bodyParser = require('body-parser')
const r = require('./routes')
let s={
  posts:[
    {
      x1:"X1",
      x2:"X2",
      x3:"X3",
      comments:[
        {
          x:"x1",
          x:"x2"
        }
      ]
    },
    {
      y1:"Y1",
      y2:"Y2",
      comments:[
        {
          y:"y1",
          y:"y2"
        }
      ]
    }
  ]
}
let x=express()
x.use(bodyParser.json())
x.use((request,response,next)=>{request.s=s;next()})
x.get('/posts',r.posts.getPosts)
x.post('/posts',r.posts.addPost)
x.put('/posts/:p',r.posts.updatePost)
x.delete('/posts/:p',r.posts.removePost)
x.get('/posts/:p/comments',r.comments.getComments)
x.post('/posts/:p/comments',r.comments.addComment)
x.put('/posts/:p/comments/:c',r.comments.updateComment)
x.delete('/posts/:p/comments/:c',r.comments.removeComment)
x.listen(8080)
