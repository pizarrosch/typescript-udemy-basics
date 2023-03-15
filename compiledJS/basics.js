"use strict";
function addNum(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
let num1;
let num2;
num1Input.onchange = (e) => {
    if (e.target) {
        num1 = +e.target.value;
    }
    return num1;
};
num2Input.onchange = (e) => {
    if (e.target) {
        num2 = +e.target.value;
    }
    return num2;
};
const printResult = true;
const resultText = 'Result is: ';
const addButton = document.querySelector('.add-button');
addButton.onclick = () => addNum(num1, num2, printResult, resultText);
