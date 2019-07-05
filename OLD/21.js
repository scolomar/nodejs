var f=require('fs');
var r=require('readline');
var i=r.createInterface(process.stdin,process.stdout);

i.setPrompt('\nNombre del directorio a crear: ');
i.prompt();
i.on('line',function(x){
	if(f.existsSync(x)){
		console.log('El directorio ya existe.');
	}else{
		f.mkdir(x,function(e){
			if(e){
				console.log(e);
			}else{
				console.log('El directorio ha sido creado.');
			}
		});
	}
	i.close();
});

