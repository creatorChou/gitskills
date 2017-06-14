'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {

    //print the method and url from requests
    console.log( req.method + ':' + req.url );

    //write the response status 200 into response, moreover, set the content-type header;
    res.writeHead( 200, {'Content-type': 'text/html'});

    //write the content into response
    res.end('<h1>Hello World!</h1>');

});

server.listen(6655);

console.log('Server is running at http://127.0.0.1:6655');