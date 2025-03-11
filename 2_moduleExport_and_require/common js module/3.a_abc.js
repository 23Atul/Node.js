// what ever is exported by multiply.js will be returned by require fn.
const obj = require("./3.b_multiply"); // not using .js extension here is totally ok.
const {calcProduct, elem} = obj; // destructuring

var a = 10;
var b = 7;
var c = 25;

calcProduct(a,b) // 70

console.log(elem*c); // 250


