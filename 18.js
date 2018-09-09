var x=require('fs');

x.readdir('.',function(e,y){
	y.forEach(function(k){
		x.stat(k,function(e,s){
			if(s.isFile()&&k!=='.gitignore'){
				x.readFile(k,'UTF-8',function(e,z){
					console.log(z);
				});
			};
		});
	});
});

