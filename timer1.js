setInterval(function()
{
  console.log("shaikshavali")
},2000);

function welcome(){
  console.log("shaik");
}
var obj = setTimeout(welcome,1000);
var obj2= setInterval(welcome,1000);
clearTimeout(obj);
//clearInterval(obj2);
