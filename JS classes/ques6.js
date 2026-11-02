"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

let employees = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Sara", "HR", 25000),
    new Employee(3, "Kiran", "Sales", 35000),
    new Employee(4, "Rahul", "IT", 40000),
    new Employee(5, "Priya", "Finance", 32000)
];

employees[0].applyBonus(10);

employees.forEach(emp => {
    console.log("Name:", emp.name);
    console.log("Department:", emp.department);
    console.log("Annual Salary:", emp.getAnnualSalary());
    console.log("------------------");
});

let total = employees.reduce(
    (sum, emp) => sum + emp.getAnnualSalary(), 0
);

console.log("Total Annual Company Payout:", total);