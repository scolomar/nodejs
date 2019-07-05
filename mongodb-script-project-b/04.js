const insertDocuments = (dbo, callback) => {
	  const db = dbo.db('edxCourse')
	  const collection = db.collection('edxCourseStudents')
	  collection.remove({})
	  collection.insert([
		      {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} 
		    ], (error, result) => {
			        if (error) return process.exit(1)
			        console.log("OK insert")
			        callback(result)
			      })
}
const updateDocument = (dbo, callback) => {
	  const db = dbo.db('edxCourse')
	  var collection = db.collection('edxCourseStudents')
	  const name = 'Peter'
	  collection.update({ name : name }, { $set: { grade : 'A' } }, (error, result) => {
		        if (error) return process.exit(1)
		        console.log("OK update")
		        callback(result)
		    })
}
const removeDocument = (dbo, callback) => {
	  const db = dbo.db('edxCourse')
	  var collection = db.collection('edxCourseStudents')
	  const name = 'Bob'
	  collection.remove({ name : name }, (error, result) => {
		        if (error) return process.exit(1)
		        console.log("OK remove")
		        callback(result)
		    })
}
const findDocuments = (dbo, callback) => {
	  const db = dbo.db('edxCourse')
	  var collection = db.collection('edxCourseStudents')
	  collection.find({}).toArray((error, result) => {
		        if (error) return process.exit(1)
		        console.log("OK find")
		  	console.log(result)
		        callback(result)
		    })
}
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/edxCourse'
MongoClient.connect(url, (error, db) => {
	  if (error) return process.exit(1)
	  console.log('Connection is okay')
	  insertDocuments(db, () => { 
		  updateDocument(db, () => { 
			  removeDocument(db, () => {
				  findDocuments(db, () => {
			  		db.close() 
				  })
			  })
		  }) 
	  })
})

