function callfunction(fun){
  fun();
}
var saybye = function(){
  console.log("bye")
}

callfunction(saybye);
