var f=require('fs');
var x='TEST';

function error(x){
	if(x){
		throw x;
	}
};

f.unlink(x+'/'+x,function(a){
	error(a);
	console.log('El fichero TEST ha sido borrado.');
	f.rmdir(x,function(a){
		error(a);
		console.log('El directorio TEST ha sido borrado.');
	});
});

