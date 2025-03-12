// ---------------------------- day - 1 --------------------------------

var name = "Atul Raman";

var a = 10;
var b = 20;

console.log(name);  // Atul Raman
console.log(a+b);   // 30

// how to see output
// 1. in terminal --> node app.js


// code runs line-by-line.
// Javascript is a single threaded, synchronous language.
// --------------------------------------------------------------------------------------------

// global object in browser is window
// global object in vs code is global

console.log(global);

//<ref * 1 > Object[global] {
//     global: [Circular * 1],
//         clearImmediate: [Function: clearImmediate],
//             setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//         clearTimeout: [Function: clearTimeout],
//             setInterval: [Function: setInterval],
//                 setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//         structuredClone: [Function: structuredClone],
//             atob: [Getter / Setter],
//                 btoa: [Getter / Setter],
//                     performance: [Getter / Setter],
//                         fetch: [Function: fetch],
//                             navigator: [Getter],
//                                 crypto: [Getter]
// }


// we can clearly see that global has methods like setTimeout, setInterval, setImmediate.
// this concludes that these methods are not given by V8 engine but are the part of the super powers given by Node.js
// this global gives many cool methods to us.
// -------------------------------------------------------------------------------------------------------

console.log(this); // {}
// in vs code or node.js this keyword returns an empty object
// where as in browser this keyword returns a window ie. this keyword always points towards the global object ie. window.
// -----------------------------------------------------------------------------------------------------------

console.log(globalThis);
// globalThis is the standard global object which is supported by all the browsers and softwares.
// this also points to same global object

// <ref * 1 > Object[global] {
//     global: [Circular * 1],
//         clearImmediate: [Function: clearImmediate],
//             setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//         clearTimeout: [Function: clearTimeout],
//             setInterval: [Function: setInterval],
//                 setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//         structuredClone: [Function: structuredClone],
//             atob: [Getter / Setter],
//                 btoa: [Getter / Setter],
//                     performance: [Getter / Setter],
//                         fetch: [Function: fetch],
//                             navigator: [Getter],
//                                 crypto: [Getter]
// }


console.log(global === globalThis);
// true


// --------------------------- day - 2 ------------------------------

// we can create nested module ie. one inside other and use them when needed.

// pattern 1
// we can require 1 or more files from the folder 
var calculateSum = require("./2_moduleExport_and_require/common js module/2.b_sum.js")
var { calcProduct } = require("./2_moduleExport_and_require/common js module/3.b_multiply.js")
var a = 150
var b = 20

calcProduct(a, b) // 3000
calculateSum(a, b) // 170



// pattern 2
// here we require the whole folder as a module.

var {calculateSum, calcProduct} = require("./2_moduleExport_and_require/common js module/4_index.js");

calculateSum(100, 800); // 900
calcProduct(99, 100); // 9900