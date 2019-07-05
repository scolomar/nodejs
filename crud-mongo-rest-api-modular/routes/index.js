module.exports={
	getAccounts(x,y){
		x.db.collection('accounts').find({},{sort:{_id:-1}}).toArray((e,z)=>{
			if(e)return next(e)
			y.send(z)
		})
	},
	postAccount(x,y){
		const b=x.body
		x.db.collection('accounts').insert(b,(e,z)=>{
			if(e)return next(e)
			y.send(z)
		})
	},
	updateAccount(x,y){
		const b=x.body
		x.db.collection('accounts').update(
			{_id:x.mongodb.ObjectID(x.params.a)},
			{$set:b},
			(e,z)=>{
				if(e)return next(e)
				y.send(z)
			})
	},
	removeAccount(x,y){
		x.db.collection('accounts').remove(
			{_id:x.mongodb.ObjectID(x.params.a)},
			(e,z)=>{
				if(e)return next(e)
				y.send(z)
			})
	}
}
