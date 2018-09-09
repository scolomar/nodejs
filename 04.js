var T=10000;
var h=1000;
var t=9000;

x=setInterval(function(){
	process.stdout.write(` ${t/1000} `);
	t-=h;
},h);

setTimeout(function(){
	clearInterval(x);
	process.stdout.write(' ... YA!!!\n');
},T);
	
