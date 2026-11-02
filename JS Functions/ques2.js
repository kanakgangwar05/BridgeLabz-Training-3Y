function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

let numbers = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));