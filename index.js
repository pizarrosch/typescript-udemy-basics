//Union types (e.g. (number | string)
//Literal types (e.g. the third parameter like --> resultType: string)
function add(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as a number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === 'as a number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
console.log(add(34, 25, 'as a number'));
console.log(add('34', '25', 'as a number'));
console.log(add('Max', 'Zaur', 'as a text'));
