var x=require('fs');

x.readFile('./Calle.js','UTF-8',function(e,x){
	if(e){
		console.log(e);
	}
	console.log(x);
});

