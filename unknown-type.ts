let userInput: unknown;
let userName: string;

// Unlike type 'any' where there are no restrictions the type 'unknown' is more restrictive
// In this example, without specifying the type there would be an error when giving userName a
// userInput value. With type 'any' there would be no error

userInput = 'Zaur';

if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName)
}

