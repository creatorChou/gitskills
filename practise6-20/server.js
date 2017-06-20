'use strict';

var 
    fs = require('fs'),
    http = require('http'),
    path = require('path'),
    url = require('url');

var root = path.resolve( process.argv[2] || '.' );

var server = http.createServer(function( request, response ) {
    var pathname = url.parse( request.url ).pathname;
    var filepath = path.join( root, pathname );
    fs.stat(filepath, function( err, stats ) {
        if( !err && stats.isFile() ) {
            response.writeHead( 200 );
            fs.createReadStream( filepath ).pipe( response );
        } else {
            response.writeHead( 404 );
            response.end( '404 not found' );
        }
    });
});

server.listen(8000);