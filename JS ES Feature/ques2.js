"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let emp of employees) {
    try {
        let salary = Number(emp.salary);
        let years = Number(emp.years);

        if (!emp.name || !Number.isFinite(salary) || !Number.isFinite(years))
            throw new Error("Invalid employee data");

        let bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`Name: ${emp.name}`);
        console.log(`Salary: ${salary}`);
        console.log(`Years: ${years}`);
        console.log(`Bonus: ${bonus}`);
        console.log("----------------");
    }
    catch (error) {
        console.log("Error:", error.message);
    }
}