let userInput: unknown;
let userName: string;

const theBody = document.getElementById('body') as HTMLBodyElement;
const theDiv = document.createElement('div');

// Unlike type 'any' where there are no restrictions the type 'unknown' is more restrictive
// In this example, without specifying the type there would be an error when giving userName a
// userInput value. With type 'any' there would be no error

userInput = 'Zaur';

if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName)
}

// the 'never' type function returns never anything, it destroys the code and ends with an error

function showError(message: string, errorCode: number): never {
    theBody.append(theDiv);
    theDiv.classList.add('error-div')
    const p = document.createElement('p');
    theDiv.append(p);
    p.innerHTML = message;
    throw {message: message, errorNumber: errorCode}

}

showError('Your information is wrong. Please read our AGB', +(Math.random() * 10000).toFixed(0));

