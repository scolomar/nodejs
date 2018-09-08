var a=require('path');
var b='Hola mundo desde Bruselas';
var c=b.slice(17);
global.console.log('Hola mundo');
global.console.log(`Bienvenidos a ${c}`);
global.console.log(__dirname);
global.console.log(__filename);
global.console.log(a.basename(__filename));
global.console.log(process.argv);
function parametro(x){
	var i=process.argv.indexOf(x);
	return (i===-1)?null:process.argv[i+1];
}
var usuario=parametro('--user');
var password=parametro('--password');
if (!usuario||!password){global.console.log('Credenciales incorrectas');}else{global.console.log(`Usuario: ${usuario}, password: ${password}`);}
