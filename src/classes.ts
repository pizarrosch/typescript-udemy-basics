class Department {
    // name: string --> there is another better method of setting the properties (see in the constructor brackets)
    protected employees: string[] = [] //"private" restricts the change of the property from the outside, as well as from
                                    // inherited classes
                                    // "protected" restricts the change of the property from the outside as well,
                                    // but, unlike "private", allows to change it from inherited classes

    constructor(private readonly id: number, private name: string) {
        // this.name = name;
    }

    describe() {
        console.log(`Department: (${this.id}) ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    render() {
        this.describe();
        this.addEmployee('Jack');
        this.addEmployee('John');
        console.log(this.employees)
    }
}

class IT extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    addEmployee(name: string) {
        this.employees.push(name);
    }
}

class reportsDepartment extends Department {
    constructor(id: number, public reports: string[]) {
        super(id, 'reportsDepartment');
        this.reports = reports;
    }

    createReports(text:string) {
        this.reports.push(text);
    }
}

const dept = new Department(1, 'Department')
const it = new IT(2, ['Bean', 'Jackson']);
const reports = new reportsDepartment(3, []);
dept.render();
console.log(dept);
it.addEmployee('Stanley');
it.render();
console.log(it)
reports.render();
reports.createReports('Yesterday new devices were purchased')
console.log(reports);
