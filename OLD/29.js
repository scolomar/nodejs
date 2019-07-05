var h=require('http');
var s=h.createServer(function(x,y){
	y.writeHead(200,{'Content-Type':'text/html'});
	y.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Hola mundo</title>
			</head>
			<body>
				<h1>Hola mundo</h1>
				<p>${x.url}</p>
				<p>${x.method}</p>
			</body>
		</html>
	`);
});
s.listen(8000);
console.log('Servidor a la escucha en el puerto 8000');
