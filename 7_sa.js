const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  fs.createReadStream('data.txt').pipe(res);
});

server.listen(3000);
