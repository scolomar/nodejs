var x=require('events').EventEmitter;
var y=require('util');

var Calle=function(x){
	this.nombre=x;
};

y.inherits(Calle,x);

var z=new Calle('semaforo');

z.on('atencion',function(x){
	console.log(`Atencion: ${this.nombre} ${x}`);
});

z.on('adelante',function(x){
	console.log(`Adelante: ${this.nombre} ${x}`);
});

z.emit('atencion','en ROJO');
z.emit('adelante','en VERDE');

