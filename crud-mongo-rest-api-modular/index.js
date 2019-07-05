const express = require('express') 
const mongodb= require('mongodb')
const bodyParser = require('body-parser')
const routes = require('./routes')
const url = 'mongodb://localhost:27017/edxCourseAPImodular'
let app = express()
app.use(bodyParser.json())
mongodb.MongoClient.connect(url, (error, dbo) => {
	if(error)return process.exit(1)
	const db=dbo.db('edxCourseAPImodular')
	app.use((request,response,next)=>{request.db=db;request.mongodb=mongodb;next()})
	app.get('/accounts',routes.getAccounts)
	app.post('/accounts',routes.postAccount)
	app.put('/accounts/:a',routes.updateAccount)
	app.delete('/accounts/:a',routes.removeAccount)
	app.listen(3000)
})

