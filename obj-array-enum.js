// const person: {
//     name: string;
//     age: number;
// }
var person = {
    name: 'Zaur',
    age: 30,
    hobbies: ['Hockey'],
    role: [2, 'sportsman']
};
person.role.push('admin');
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
