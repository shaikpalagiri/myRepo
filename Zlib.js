const zlib = require('zlib');
const unzip= zlib.createUnzip();
const fs = require('fs');
const inp = fs.createReadStream('input.txt.gz');
const out = fs.createWriteStream('input.txt');
inp.pipe(unzip).pipe(out);
commit;
