interface Name {
    name: string;
}

// unlike class which can be extended only once, multiple interfaces can be extended

interface Greet extends Name{
    age: number;
    greet(text: string): void;
}

// interfaces are used to define an object structure. The new object HAS to have all properties given in the interface;
    //moreover, in the new object no extra properties can be created, which doesn't exist in the interface.

// interfaces can also be used for classes, which implement the structure given in an interface. In this case additional
// properties can be created in the class. This looks then like in an example below

class Person implements Greet {
    name: string;
    age = 33;
    dogName = 'Goofy'

    constructor(n: string) {
        this.name = n;
    }

    greet(text: string) {
        console.log(text + ' ' + this.name + ' and ' + this.dogName)
    }
}

let user1: Greet;

user1 = {
    name: 'Zaur',
    age: 33,
    greet(text) {
    console.log(text)}
}

user1.greet(`Hello ${user1.name}! We congratulate you on your ${user1.age}d birthday!`)
let greetings: Greet;
greetings = new Person('Zaur');
greetings.greet('Hello');
console.log(user1, greetings)