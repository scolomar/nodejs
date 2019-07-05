module.exports={
	getComments(x,y){
		x.status(200).send(x.s.posts[x.params.p].comments)
	},
	addComment(x,y){
		let b=x.body
		let comments=x.s.posts[x.params.p].comments
		let c=comments.length
		comments.push(b)
		y.status(201).send({idComment:c})
	},
	updateComment(x,y){
		const p=x.params.p
		const c=x.params.c
		x.s.posts[p].comments[c]=Object.assign(x.s.posts[p].comments[c],x.body)
		y.status(200).send(x.s.posts[p].comments[c])
	},
	removeComment(x,y){
		const p=x.params.p
		const c=x.params.c
		x.s.posts[p].comments.splice(c,1)
		y.status(204).send()
	}
}

