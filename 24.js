var e=require('child_process').exec;
var f=require('fs');
var u="https://www.gutenberg.org/ebooks/2000.txt.utf-8";
var o='libro.txt';
var texto='';

function error(x){
	if(x){
		throw x;
	}
};

if(!f.existsSync(o)){
	e(`wget -O ${o} ${u}`,function(a){
		error(a);
		console.log('Se ha descargado el enlace y se ha guardado en el archivo %s.',o);
	});
}else{
	console.log('El archivo %s ya existe.',o);
};
var s=f.createReadStream(o,'UTF-8');
s.once('data',function(){
	console.log('Se ha comenzado a procesar el texto...');
});
s.on('data',function(a){
	texto+=a;
});
s.on('end',function(){
	console.log('Se ha terminado de procesar el texto: %s caracteres.',texto.length);
});

