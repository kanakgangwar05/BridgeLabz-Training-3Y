
let userName = "Kanak";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "HTML"];
let user = { name: "Kanak", age: 20 };
let address = null;
let phone;

let data = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Phone", Value: phone, Type: typeof phone }
];

console.table(data);