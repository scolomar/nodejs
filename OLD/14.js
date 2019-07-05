var x=require('fs');

require('child_process').exec('ls',function(e,x){
	if(e){
		throw e;
	}
	console.log('\n',x);
});

x.readdir('.',function(e,x){
	if(e){
		throw e;
	}
	console.log(x);
});

