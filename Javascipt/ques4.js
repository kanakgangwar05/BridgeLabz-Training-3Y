// Store marks of five subjects
let marks = [90, 85, 78, 88, 92];

// Calculate total marks
let total = 0;

for (let mark of marks) {
    total += mark;
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;


let result;

if (marks.some(mark => mark < 35)) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log("Total Marks: " + total);
console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Result: " + result);