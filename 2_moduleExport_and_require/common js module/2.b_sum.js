
console.log("welcome to sum module");

// we can't directly access the methods, functions, variables of one module into another by just simply requiring it.
// by default modules protech them from leaking.


function calculateSum(x,y,z){
    const sum = x+y+z;

    console.log(sum);
}

// we need to make the modules available for each other
module.exports = calculateSum
// what ever we export from here will be returned by the require fn.