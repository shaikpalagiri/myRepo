var assert = require('assert');
function add (a, b) {
  return a + b;
}
var obj = add(1,2);
assert( obj === 3, 'one plus two is three');  
