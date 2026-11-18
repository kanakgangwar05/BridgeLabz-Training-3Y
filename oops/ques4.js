class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing employee work.");
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name, "is managing the team.");
    }
}

let emp1 = new Employee("Amit", "IT");
let manager1 = new Manager("Sara", "HR");
emp1.work();
manager1.work();