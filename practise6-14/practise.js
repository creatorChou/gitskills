'use strict';
console.log( 'hello world!' );

function add( a ) {
    return function( b ) {
        console.log( a + b );
    }
}

module.exports = {
    add: add
}