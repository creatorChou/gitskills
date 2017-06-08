console.time('s');
console.log( process.version );
console.log( process.platform );
console.log( process.version );
console.log( process.platform );
console.log( process.arch );
console.log( process.arch + '\n' );
console.timeEnd('s');

process.nextTick(function() {
    console.log('nextTick callback');
});
console.log('next tick was set');

process.on('exit',function() {
    console.log('now over!');
});