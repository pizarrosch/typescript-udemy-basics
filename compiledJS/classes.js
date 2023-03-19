"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string --> there is another better method of setting the variables (see in the constructor brackets)
        this.employees = [];
        // this.name = name;
    }
    describe() {
        console.log(`Department: (${this.id}) ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    render() {
        this.describe();
        this.addEmployee('Jack');
        this.addEmployee('John');
        console.log(this.employees);
    }
}

const sales = new Department(1, 'Sales');
sales.render();
