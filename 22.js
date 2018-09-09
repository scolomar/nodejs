var f=require('fs');
var x='test';
var y='Test';
var z='TEST';

function error(x){
	if(x){
		throw x;
	}
};

if(f.existsSync(x)){
	console.log('El archivo test ya existe.');
}else{
	f.open(x,'w',function(a,b){
		error(a);
		f.close(b,function(a){
			error(a);
			console.log('El archivo test ha sido creado.');
		});
	});
};

if(f.existsSync(y)){
	console.log('El directorio Test ya existe.');
}else{
	f.mkdir(y,function(a){
		error(a);
		console.log('El directorio Test ha sido creado.');
	});
};

f.rename(x,z,function(a){
	error(a);
	console.log('El archivo test ahora se llama TEST.');
	f.rename(z,y+'/'+z,function(a){
		error(a);
		console.log('El archivo TEST se ha movido al directorio Test.');
		f.rename(y,z,function(a){
			error(a);
			console.log('El directorio Test ahora se llama TEST.');
		});
	});
});

