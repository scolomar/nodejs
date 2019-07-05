var x=require('child_process').exec;

function y(Y){
	x(Y,function(x,y){
		console.log(y);
	});
};

y('ls');
y('git version');
y('sudo netstat -putana');
