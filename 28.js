var h=require('http');
var s=h.createServer(function(x,y){
	y.writeHead(200,{'Content-Type':'text/plain'});
	y.end('Hola mundo');
});
s.listen(8000);
console.log('Servidor a la escucha en el puerto 8000');
