const concat = require('concat-stream');
const fs = require('fs');
const transformSingleBuffer = concat(transform);

function transform(singleBuffer){
  console.log(singleBuffer.toString().split('').reverse().join(''));
}

process.stdin.pipe(transformSingleBuffer);
