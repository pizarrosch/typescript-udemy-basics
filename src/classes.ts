class Department {
    // name: string --> there is another better method of setting the properties (see in the constructor brackets)
    protected employees: string[] = [] //"private" restricts the change of the property from the outside, as well as from
                                    // inherited classes
                                    // "protected" restricts the change of the property from the outside as well,
                                    // but, unlike "private", allows to change it from inherited classes

    constructor(private readonly id: number, private name: string) {
        // this.name = name;
    }

    // Static methods  --> these methods can be accessed from outside just by calling the class name, without
    // creating a variable with "new Class", for example like Math.PI (not "new Math.PI)
    // in our case it would be, for example, Department.createEmployee

    static createEmployee(name: string) {
        console.log({name: name});
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
    private recentReport: string;

    get theRecentReport() {
        if (this.recentReport) {
            return this.recentReport
        } else {
            throw Error('Error')
        }
    }

    set theRecentReport(value:string) {
        this.createReports(value);
    }

    constructor(id: number, public reports: string[]) {
        super(id, 'reportsDepartment');
        this.recentReport = reports[0];
    }

    createReports(text:string) {
        this.reports.push(text);
        this.recentReport = text;
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
reports.createReports('Yesterday new devices were purchased');
reports.theRecentReport = 'New computers are needed'
console.log(reports.theRecentReport);
console.log(reports);
Department.createEmployee('Zaur'); // in such a way the static method can be called
                                            // this does not work with normal methods
