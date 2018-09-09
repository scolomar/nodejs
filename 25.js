var f=require('fs');
var r=require('readline');
var x=r.createInterface(process.stdin,process.stdout);

var y={
	hotel:'',
	reservas:[]
};

x.question('\nHotel: ',function(z){
	y.hotel=z;
	var s=f.createWriteStream(z+'.txt');
	s.write(`\nHotel: ${z}\nReservas:`);
	x.setPrompt('\nFecha de la reserva: ');
	x.prompt();
	x.on('line',function(u){
		if(u.toUpperCase().trim()==='Q'){
			x.close();
		}else{
			x.setPrompt(`Nueva reserva para ${y.hotel} (Pulse Q para salir): `);
			x.prompt();
			y.reservas.push(u.trim());
			s.write(` ${u.trim()}`);
		}
	});
});

x.on('close',function(){
	f.appendFileSync(y.hotel+'.txt','\n');
	console.log('\nHotel: %s\nReservas: %j',y.hotel,y.reservas);
	process.exit();
});

