module.exports={
	getHomepage(x,y){
		y.render("homepage");
	},
	getHomepageUser(x,y){
		u=x.params.u;
		y.render("homepage-user",{
			getUser:function(){
				return u;
			}
		})
	}
}
