setInterval(function(){
	process.stdout.write('Pulsa ENTER para finalizar el proceso\n');
},1000);

process.stdin.on('data',function(){
	process.exit();
});
