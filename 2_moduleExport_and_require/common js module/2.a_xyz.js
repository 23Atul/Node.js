// what ever is exported by sum.js will be returned by require fn.
const calculateSum = require("./2.b_sum")

var x = 10;
var y = 20;
var z = 30;

calculateSum(x,y,z)

// welcome to sum module
// 60

// if we try to run we get reference error

//welcome to sum module
// ReferenceError: calculateSum is not defined
// to overcome this error we need 
