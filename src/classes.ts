class Department {
    // name: string --> there is another better method of setting the variables (see in the constructor brackets)
    private employees: string[] = []

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
    constructor(id: number) {
        super(id, 'IT');
    }
}

const sales = new Department(1, 'Sales');
sales.render();