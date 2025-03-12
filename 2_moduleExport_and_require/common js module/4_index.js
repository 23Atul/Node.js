
// this file is created to demosntrate the patter 2 of module sharing.
// visible in day 2 of app.js

// instead of exporting different files what we do is we require the different files here in index.js 
// and export the whole folder as a module.

const calculateSum = require("./2.b_sum");
const { calcProduct } = require("./3.b_multiply");

module.exports = {calcProduct, calculateSum};