'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('practise6-9/sayHello.txt','utf-8');
ws1.write('My name is Zhoushuo\n');
ws1.write('That\'s my way to play\n');
ws1.end();

var ws2 = fs.createWriteStream('practise6-9/sayHello.txt','utf-8');

var rs = fs.createReadStream('practise6-9/copyHello.txt','utf-8');
rs.pipe(ws2);