var h=require('http');
var f=require('fs');
var p=require('path');

h.createServer(function(x,y){
	console.log(`${x.method} ${x.url}`);
	if(x.url==='/'){
		f.readFile('public/index.html','UTF-8',function(a,b){
			y.writeHead(200,{'Content-Type':'text/html'});
			y.end(b);
		});
	}else if(x.url.match(/libro.txt$/)){
		P=p.join('public',x.url);
		s=f.createReadStream(P,'UTF-8');
		y.writeHead(200,{'Content-Type':'text/plain'});
		s.pipe(y);
	}else if(x.url.match(/imagen.jpg$/)){
		P=p.join('public',x.url);
		s=f.createReadStream(P);
		y.writeHead(200,{'Content-Type':'image/jpg'});
		s.pipe(y);
	}else{
		y.writeHead(404,{'Content-Type':'text/plain'});
		y.end('404 Fichero no encontrado');
	}
}).listen(8000);
