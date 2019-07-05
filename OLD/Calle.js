var e=require('events').EventEmitter;
var u=require('util');

var Calle=function(x){
	this.nombre=x;
};

u.inherits(Calle,e);

module.exports=Calle;
