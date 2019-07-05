const insertDocuments = (db, callback) => {
	  const collection = db.collection('edx-course-students')
	  collection.insert([
		      {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} 
		    ], (error, result) => {
			        if (error) return process.exit(1)
			        console.log(result.ops)
			        callback(result)
			      })
}
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/edx-course-db'
MongoClient.connect(url, (error, db) => {
	  if (error) return process.exit(1)
	  console.log('Connection is okay')
	  insertDocuments(db, () => {
		      db.close()
		    })
})

