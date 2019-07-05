var x=require('./Calle.js')

var s=new x('semaforo');

s.on('atencion',function(x){
	console.log(`Atencion: ${this.nombre} ${x}`);
});

s.on('adelante',function(x){
	console.log(`Adelante: ${this.nombre} ${x}`);
});

s.emit('atencion','en ROJO');
s.emit('adelante','en VERDE');

var p=new x('peaton');

p.on('cuidado',function(x){
	console.log(`Cuidado: ${this.nombre} ${x}`);
});

p.emit('cuidado','cruzando la calzada');
p.emit('cuidado','parado en la calzada');
