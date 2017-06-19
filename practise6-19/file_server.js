'use strict';

var 
    fs = require( 'fs' ),
    http = require( 'http' ),
    url = require( 'url' ),
    path = require( 'path' );

var root = path.resolve( process.argv[2] || '.' );

console.log( 'Static root dir: ' + root );

var server = http.createServer(function( req, res ) {
    var pathname = url.parse( req.url ).pathname;

    var filepath = path.join( root, pathname );

    fs.stat(filepath, function( err, stats) {
        if( !err && stats.isFile() ) {
            //File is exist without error
            console.log( '200' + req.url );
            res.writeHead( 200 );
            fs.createReadStream( filepath ).pipe( res );
        } else {
            //file is not found
            var indexPath = path.join( filepath, 'index.html' );
            var defaultPath = path.join( filepath, 'default.html' );
            var hasFile = false;
            try{
                var index = fs.statSync( indexPath );
                console.log( index );
                if( index.isFile() ) {
                    hasFile = true;
                    res.writeHead( 200 );
                    fs.createReadStream( indexPath ).pipe( res );
                }
            } catch( e ) {
            }

            try{
                var def = fs.statSync( defaultPath );
                hasFile = true;
                res.writeHead( 200 );
                fs.createReadStream( defaultPath ).pipe( res );
            } catch( e ) {
            }
            
            if( !hasFile ) {
                console.log( '404' + req.url );
                res.writeHead( 404 );
                res.end('404 not found');
            }
        }
    });
});

server.listen( 6655 );