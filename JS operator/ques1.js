
let bonus = 5000;
function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    
    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary: ₹" + salary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus: ₹" + bonus);