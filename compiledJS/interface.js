"use strict";
// interfaces are used to define an object structure. The new object HAS to have all properties given in the interface;
//moreover, in the new object no extra properties can be created, which doesn't exist in the interface.
// interfaces can also be used for classes, which implement the structure given in an interface. In this case additional
// properties can be created in the class. This looks then like in an example below
class Greeting {
    constructor() {
        this.name = 'Zaur';
        this.age = 33;
    }
    greet(text) {
        console.log(text);
    }
    render() {
        this.greet('Hello');
    }
}
let user1;
user1 = {
    name: 'Zaur',
    age: 33,
    greet(text) {
        console.log(text);
    }
};
user1.greet(`Hello ${user1.name}! We congratulate you on your ${user1.age}d birthday!`);
let greetings = new Greeting();
greetings.render();
