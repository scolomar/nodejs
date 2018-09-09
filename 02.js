function parametro(x){
	var i=process.argv.indexOf(x);
	return (i===-1)?null:process.argv[i+1];
}

var usuario=parametro('--user');

var password=parametro('--password');

if (!usuario||!password){
	console.log('Credenciales incorrectas');
}else{
	console.log(`Usuario: ${usuario}, password: ${password}`);
}

