var x=require('events');
var y=new x.EventEmitter();

y.on('Ejemplo de evento',function(x,y){
	console.log(`${x}, ${y}`);
});

y.emit('Ejemplo de evento','Hola','mundo');
