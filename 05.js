var r=require('readline');
var x=r.createInterface(process.stdin,process.stdout);

var y={
	hotel:'',
	reservas:[]
};

x.question('\nHotel: ',function(z){
	y.hotel=z;
	x.setPrompt('\nFecha de la reserva: ');
	x.prompt();
	x.on('line',function(u){
		if(u.toUpperCase().trim()==='Q'){
			x.close();
		}else{
			x.setPrompt(`Nueva reserva para ${y.hotel} (Pulse Q para salir): `);
			x.prompt();
			y.reservas.push(u.trim());
		}
	});
});

x.on('close',function(){
	console.log('\nHotel: %s\nReservas: %j',y.hotel,y.reservas);
	process.exit();
});

