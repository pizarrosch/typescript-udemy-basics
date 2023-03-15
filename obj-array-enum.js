"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //Tuple
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
const body = document.getElementById('body');
const div = document.createElement('div');
div.classList.add('paragraph-container');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); //assigns labels to variables
const person = {
    name: 'Zaur',
    age: 30,
    hobbies: ['Hockey', 'Football', 'Tennis'],
    role: Role.ADMIN
};
// person.role.push('admin') // is allowed
//person.role = [3, 'football player', 'admin'] //is not allowed
person.hobbies.forEach((hobby) => {
    body.append(div);
    const p = document.createElement('p');
    div.append(p);
    p.append(hobby.toString());
    console.log(p);
});
