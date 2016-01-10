const http = require('http');
const fs = require('fs');
const through = require('through2');
const PORT = process.argv[2];
const stream = through(write, end);


const server = http.createServer((req, res)=>{
  if(req.method === 'POST'){
    req.pipe(stream).pipe(res);
  }

});

server.listen(PORT);

function write(buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done){
  done();
}
