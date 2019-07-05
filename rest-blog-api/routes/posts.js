module.exports={
	getPosts(x,y){y.status(200).send(x.s.posts)},
	addPost(x,y){let b=x.body;let p=x.s.posts.length;
		x.s.posts.push(b);y.status(201).send({idPost:p})},
	updatePost(x,y){
		const p=x.params.p
		x.s.posts[p]=Object.assign(x.s.posts[p],x.body);
		y.status(200).send(x.s.posts[p])
	},
	removePost(x,y){
		x.s.posts.splice(x.params.p,1)
		y.status(204).send()
	}
}
