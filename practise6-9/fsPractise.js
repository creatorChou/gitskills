'use strict';
var fs = require('fs');
/*
fs.readFile('./hello.js','utf-8',function( err, data ) {
    if( err ) {
        console.log( err );
    } else {
        fs.writeFile( 'practise6-9/copyHello.txt', data );
    }
});
*/

var data = fs.readFileSync('./hello.js','utf-8');
//console.log( data );

//fs.writeFileSync('practise6-9/sayHello.txt','Hello World!');

fs.stat('practise6-9/sayHello.txt',function( err, stat ) {
    if( err ) {
        console.log( err );
    } else {
        console.log( stat );
        console.log( 'isFile:' + stat.isFile() );    //是否是文件
        console.log( 'isDirectory:' + stat.isDirectory() );  //是否是目录
        console.log( 'size:' + stat.size );  //文件大小
        console.log( 'birth time:' + stat.birthtime );   //诞生时间
        console.log( 'modifyTime:' + stat.mtime );      //修改时间
    }
});