/*console.log(__dirname);
console.log(__filename);
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len);*/

var buff = new Buffer(256);
var len = buff.write("shaikshavali");
console.log("length of the buffer:" + len);

var buff1 = new Buffer(26);
for (var i = 0; i < 26; i++) {
  buff1[i]= i+97;
}
console.log(buff1.toString('ascii',0,5));
