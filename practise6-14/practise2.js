'use strict';
var p1 = require( './practise' );
var add = p1.add;
add(2)(3);

console.log( process.cwd() );   //e:\nodeJs  =>  可能是返回根目录

var fs = require('fs');
fs.readFile('practise6-14/practise.js','utf-8',function( err, data ) {
    if( err ) {
        console.log( err );
    } else {
        //console.log( data );
        //fs.writeFile( 'practise6-14/copy1.txt', data );
    }
});

var rs = fs.createReadStream('practise6-14/practise.js','utf-8');
rs.on('data', function( chunk ) {
    console.log( chunk );
});

rs.on('end', function() {
    console.log('END');
});

rs.on('error', function( err ) {
    console.log( err );
});

var ws1 = fs.createWriteStream('practise6-14/writeBoard.txt','utf-8');
ws1.write('白日依山尽\n');
ws1.write('黄河入海流\n');
ws1.write('欲穷千里目\n');
ws1.write('更上一层楼');
ws1.end();

var ws2 = fs.createWriteStream('practise6-14/writeBoard2.txt');
ws2.on('end', function() {
    console.log('ws2 end');
});
rs.pipe( ws2 );