var x=require('child_process').spawn;
var y=x('yes');

y.stdout.on('data',function(k){
	console.log(`${k.toString()}`);
});

setTimeout(function(){
	process.exit();
},1000);

