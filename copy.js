'use strict';
let s = 'Hello ';

function greet ( str ) {
    console.log( s + str );
}

function showGlobal () {
    console.log( global );
}

module.exports = {
    greet: greet,
    showGlobal: showGlobal
}