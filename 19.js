var x=require('fs');

x.readdir('.',function(e,y){
	y.forEach(function(k){
		x.stat(k,function(e,s){
			if(s.isFile()&&k!=='.gitignore'){
				console.log('\n',k,s);
			};
		});
	});
});

