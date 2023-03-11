function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        return phrase + result;
    }
    else {
        return n1 + n2;
    }
}
var num1 = Math.floor(Math.random() * 150);
var num2 = 87;
var printResult = true;
var resultText = 'Result is: ';
add(num1, num2, printResult, resultText);
