const split = require('split');
const through = require('through2');
const stream = through(write);
const fs = require('fs');

// really wish I could do this without 'state'...
var counter = 0;

function write(buffer, format, next){
  const buf = counter++%2 ? buffer.toString().toUpperCase() : 
                            buffer.toString().toLowerCase();  
  this.push(buf + '\n');

  next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);

