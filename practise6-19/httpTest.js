'use strict';

var http = require( 'http' );
var fs = require( 'fs' );
var server = http.createServer(function( req, res ) {
    console.log( req.method + ':' + req.url );
    res.writeHead( 200, {'Content-Type': 'text/html'} );
    var data = fs.readFileSync( 'practise6-19/test.html', 'utf-8' );
    res.end( data );
});

server.listen( 6655 );

console.log( 'server is running at port 6655' );