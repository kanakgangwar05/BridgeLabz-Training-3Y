"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];

const num1 = 25;
const num2 = 0;

let operation = "add";
let result;

class InvalidOperationError extends Error {}

try {
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "divide":
            if (num2 === 0) throw new Error("Cannot divide by zero");
            result = num1 / num2;
            break;

        case "power":
            result = num1 ** num2;
            break;

        case "root":
            if (num1 < 0) throw new Error("Negative root not allowed");
            result = Math.sqrt(num1);
            break;

        case "subtract":
            result = num1 - num2;
            break;

        default:
            throw new InvalidOperationError("Invalid operation");
    }

    console.log("Operation:", operation);
    console.log("Result:", result);
}
catch (error) {
    console.log("Error:", error.message);
}