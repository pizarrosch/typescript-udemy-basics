function addNum(n1: number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2;

    if(showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;

let num1:number;
let num2:number;

num1Input.onchange = (e:Event) => {
    if (e.target) {
        num1 = +(e.target as HTMLInputElement).value;
    }
    return num1;
}

num2Input.onchange = (e:Event) => {
    if (e.target) {
        num2 = +(e.target as HTMLInputElement).value;
    }
    return num2;
}


const printResult = true;
const resultText = 'Result is: ';
const addButton = document.querySelector('.add-button') as HTMLButtonElement;


addButton.onclick = () => addNum(num1, num2, printResult, resultText);