const express = require('express') 
const bodyParser = require('body-parser')
let store = {}
store.accounts = []
let app = express()
app.use(bodyParser.json())
app.get('/API',(request,response)=>{response.status(200).send(store.accounts)})
app.post('/API',(request,response)=>{let newAccount=request.body;
	let idAccount=store.accounts.length;
	store.accounts.push(newAccount);
	response.status(201).send({id:idAccount});
})
app.put('/API/:a',(x,y)=>{store.accounts[x.params.a]=x.body;
	y.status(200).send(store.accounts[x.params.a]);
})
app.delete('/API/:a',(x,y)=>{store.accounts.splice(x.params.a,1);
	y.status(204).send();
})
app.listen(8080)
