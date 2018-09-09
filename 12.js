var x=require('child_process').spawn;
var y=x('vmstat',['1']);

y.stdout.on('data',function(k){
	console.log(`${k.toString()}`);
});

setTimeout(function(){
	process.exit();
},9000);

