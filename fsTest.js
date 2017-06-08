'use strict';
var fs = require('fs');

/*fs.readFile('hello.js','utf-8',function(err, data) {
    if( err ) {
        console.log( err );
    } else {
        console.log( data );
    }
});*/

/*try{
    var data = fs.readFileSync('hello.js','utf-8');
    console.log( data );
} catch (e) {
    console.log( e );
}*/

//fs.writeFile('copy.js', data);
fs.stat('copy.js', function( err, stat ) {
    if( err ) {
        console.log( err );
    } else {
        console.log( stat );
    }
});