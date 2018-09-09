var a=require('path');
var b='Hola mundo desde Bruselas';
var c=b.slice(17);

console.log('');
console.log('Hola mundo');
console.log(`Bienvenidos a ${c}`);
console.log(__dirname);
console.log(__filename);
console.log(a.basename(__filename));
console.log(process.argv);
console.log('');

var x=require('util');

x.log('Hola mundo');
x.log(`Bienvenidos a ${c}`);
x.log(__dirname);
x.log(__filename);
x.log(a.basename(__filename));
x.log(process.argv);
console.log('');

var z=require('v8');

x.log(z.getHeapStatistics());
console.log('');

