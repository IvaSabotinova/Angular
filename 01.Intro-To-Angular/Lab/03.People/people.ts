abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = new Array<string>();
    }

    public work(): void {
        const currentTask = this.tasks.shift() ?? '';
       // if (currentTask) {
            this.tasks.push(currentTask);
            console.log(this.name + currentTask);
       // }
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);

    }

    public getSalary(): number {
        return this.salary
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(` is working on a simple task.`)
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(` is working on a complicated task.`);
        this.tasks.push(` is taking time off work.`);
        this.tasks.push(` is supervising junior workers.`);
    }
}

export class Manager extends Employee {
    public divident: number;
    constructor(name: string, age: number) {
        super(name, age)
        this.divident = 0;
        this.tasks.push(` scheduled a meeting.`);
        this.tasks.push(` is preparing a quarterly report.`);
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

const junior01 = new Junior('junior', 26);
console.log(junior01);
const manager01 = new Manager('manager', 35);
console.log(manager01);
const senior01 = new Senior('senior', 45);
console.log(senior01);
const manager02 = new Manager('Gosho', 38);
console.log(manager02);
const senior02 = new Senior('Martin', 48);
console.log(senior02);
console.log(senior01.getSalary());
senior02.work();
senior02.work();
senior02.work();
senior02.work();
senior02.work();
senior02.work();
manager01.work();
manager02.work();
