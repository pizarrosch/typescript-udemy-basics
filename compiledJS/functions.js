"use strict";
function multiply(n1, n2) {
    return n1 * n2;
}
// type "void" means that a function returns nothing
// on the other side one cannot use type "undefined" if the function returns nothing
function printTheResult(num) {
    console.log('Result ' + num);
}
printTheResult(multiply(4, 7));
let pointerFunction;
pointerFunction = multiply;
console.log(multiply(7, 8));
//callback function
//callback functions can return something, even if the argument on which they're passed does NOT expect a returned value
function addAndRunCallback(num1, num2, cb) {
    const addResult = num1 + num2;
    cb(addResult);
}
addAndRunCallback(2, 67, (result) => {
    console.log(result);
});
