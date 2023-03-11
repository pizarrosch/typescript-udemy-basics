// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //Tuple
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR} //assigns labels to variables

const person = {
    name: 'Zaur',
    age: 30,
    hobbies: ['Hockey'],
    role: Role.ADMIN
} 

// person.role.push('admin') // is allowed
//person.role = [3, 'football player', 'admin'] //is not allowed
console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
