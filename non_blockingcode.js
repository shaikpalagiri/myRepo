var fs = require('fs');
var obj =fs.readFile('input.txt', function(err,data){
  if(err){
    return console.error(err);
  }
  console.log(data.toString());
});
