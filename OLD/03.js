var x=['Nombre: ','Apellido: '];

var y=[];

function pregunta(i){
	process.stdout.write(`${x[i]}`);
}

process.stdin.write('\nPor favor, introduce tu nombre y apellido...\n');

pregunta(0);

process.stdin.on('data',function(z){
	y.push(z.toString().trim());
	if(y.length<x.length){
		pregunta(y.length);
	}else{
		process.exit();
	}
});

process.on('exit',function(){
	process.stdout.write(`\nBienvenido, ${y[0]} ${y[1]}\n\n`);
});

