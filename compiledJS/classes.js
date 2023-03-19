"use strict";
class Department {
    // inherited classes
    // "protected" restricts the change of the property from the outside as well,
    // but, unlike "private", allows to change it from inherited classes
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string --> there is another better method of setting the properties (see in the constructor brackets)
        this.employees = []; //"private" restricts the change of the property from the outside, as well as from
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
class IT extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    addEmployee(name) {
        this.employees.push(name);
    }
}
class reportsDepartment extends Department {
    constructor(id, reports) {
        super(id, 'reportsDepartment');
        this.reports = reports;
        this.reports = reports;
    }
    createReports(text) {
        this.reports.push(text);
    }
}
const dept = new Department(1, 'Department');
const it = new IT(2, ['Bean', 'Jackson']);
const reports = new reportsDepartment(3, []);
dept.render();
console.log(dept);
it.addEmployee('Stanley');
it.render();
console.log(it);
reports.render();
reports.createReports('Yesterday new devices were purchased');
console.log(reports);
