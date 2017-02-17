const exec = require('child_process').exec
exec('my.bat',(err,stdout,strerr)=>{
  if(err){
    console.error(err);
    return;
  }
  console.log(stdout)
});
