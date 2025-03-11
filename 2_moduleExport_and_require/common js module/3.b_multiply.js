
var elem = 10;

function calcProduct(a,b){
    const pro = a * b;
    console.log(pro);
}

// when we want to export 2 or more values from the same file we export it in form of Object.

// old way
// module.exports={
//     elem : elem,
//     calcProduct : calcProduct
// };

// new way
module.exports = {elem,calcProduct}; 
