const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/edx-course-db'
const insertDocuments = (db, callback) => {
	const collection = db.collection('edx-course-students')
  	collection.insert(
		[ {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} ], 
    		(error, result) => {
			if (error) return process.exit(1)
      			console.log(result.result.n)
      			console.log(result.ops.length) 
      			console.log('Inserted 3 documents into the edx-course-students collection')
      			callback(result)
    		})
}
const updateDocument = (db, callback) => {
	var collection = db.collection('edx-course-students')
  	const name = 'Peter'
  	collection.update(
		{ name : name }, 
    		{ $set: { grade : 'A' } }, 
    		(error, result) => {
			if (error) return process.exit(1)
      			console.log(result.result.n)
      			console.log(`Updated the student document where name = ${name}`)
      			callback(result)
    		})
}
const removeDocument = (db, callback) => {
	const collection = db.collection('edx-course-students')
  	const name = 'Bob'
  	collection.remove(
		{ name : name }, 
    		(error, result) => {
			if (error) return process.exit(1)
      			console.log(result.result.n)
      			console.log(`Removed the document where name = ${name}`)
      			callback(result)
    		})
}
var findDocuments = (db, callback) => {
	var collection = db.collection('edx-course-students')
  	collection.find({}).toArray(
		(error, docs) => {
      			if (error) return process.exit(1)
      			console.log(2, docs.length)
      			console.log(`Found the following documents:`)
      			console.dir(docs)
      			callback(docs)
    		})
}
MongoClient.connect(
	url, 
  	(error, client) => {
    		if (error) return process.exit(1)
    		console.log('Connection is okay')
    		insertDocuments(
			db, 
      			() => {
        			updateDocument(
          				db, 
          				() => {
            					removeDocument(
              						db, 
              						() => {
                						findDocuments(
                  							db, 
                  							() => {
                    								db.close()
                  							})
              						})
          				})
      			})
  	})
