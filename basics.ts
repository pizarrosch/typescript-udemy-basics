function add(n1: number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2;

    if(showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

const num1 = Math.floor(Math.random() * 150);
const num2 = 87;
const printResult = true;
const resultText = 'Result is: ';


add(num1, num2, printResult, resultText);