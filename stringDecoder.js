const StringDecoder= require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

const buf1 = new Buffer('This is my laptop');
console.log(decoder.write(buf1));

const crypto= require('crypto');
const secret='shaik';
const hash = crypto.createHmac('sha256',secret)
                    .update("This is my laptop")
                    .digest('hex');
                    console.log(hash);

const buf2= new Buffer('304c406c6e5ad68a14f831183d7394c67fe9d86026af9b3ff91b8393461dc63d','hex');
console.log(decoder.write(buf2));
