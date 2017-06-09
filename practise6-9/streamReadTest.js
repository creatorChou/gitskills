'use strict';

var fs = require('fs');

//打开一个流
var rs = fs.createReadStream( 'practise6-9/sayHello.txt', 'utf-8' );

//data事件
rs.on( 'data', function( chunk ) {
    console.log( 'DATA:' );
    console.log( chunk );
});

//end
rs.on( 'end', function () {
    console.log( 'END' );
});

//err
rs.on( 'err', function( err ) {
    console.log( err );
});