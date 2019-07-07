const express = require('express') 
const mongodb= require('mongodb')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/edxCourseAPI'
let app = express()
app.use(bodyParser.json())
mongodb.MongoClient.connect(url, (error, dbo) => {
	  if (error) return process.exit(1)
	  const db = dbo.db('edxCourseAPI')
	  app.get('/accounts', (req, res) => {
		      db.collection('accounts')
		        .find({}, {sort: {_id: -1}})
		        .toArray((error, accounts) => {
				        if (error) return next(error)
				        res.send(accounts)
				    })
		    })
	  app.post('/accounts', (req, res) => {
		      let newAccount = req.body
		      db.collection('accounts').insert(newAccount, (error, results) => {
			            if (error) return next(error)
			            res.send(results)
			          })
		    })
	  app.put('/accounts/:id', (req, res) => {
		     db.collection('accounts')
		       .update({_id: mongodb.ObjectID(req.params.id)}, 
			              {$set: req.body}, 
			              (error, results) => {
					               if (error) return next(error)
					               res.send(results)
					             }
			            )
		    })
	  app.delete('/accounts/:id', (req, res) => {
		     db.collection('accounts')
		       .remove({_id: mongodb.ObjectID( req.params.id)}, (error, results) => {
			             if (error) return next(error)
			             res.send(results)
			          })
		    })
	  
	  app.listen(8080)
})




