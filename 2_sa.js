const fs = require('fs');
const file = process.argv[2];

if(!file){ 
  throw new Error('you need to specify a file to pipe to stdout!');
}

fs.createReadStream(file).pipe(process.stdout);

