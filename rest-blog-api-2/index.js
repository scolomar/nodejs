const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

let store = {
	  posts: [
		      {
			            name: 'Top 10 ES6 Features every Web Developer must know',
			            url: 'https://webapplog.com/es6',
			            text: 'This essay will give you a quick introduction to ES6.',
			            comments: [
					            {text: 'Cruel...var { house, mouse} = No type optimization at all'},
					            {text: 'I think you\'re undervaluing the benefit of let and const.'},
					            {text: '(p1,p2)=>{ ... } ,I understand this ,thank you !'}
					          ]
			          }
		    ]
}
let app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
	  req.store = store
	  next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(8080)
