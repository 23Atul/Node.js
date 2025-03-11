
console.log("welcome to sum module");

// we can't directly access the methods, functions, variables of one module into another by just simply requiring it.
// by default modules protech them from leaking.


export function calculateSum(x, y, z) {
    const sum = x + y + z;

    console.log(sum);
}

