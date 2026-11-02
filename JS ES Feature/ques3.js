"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
    try {
        debugger;

        if (t === null)
            throw new Error("Null Entry");

        if (t.id === undefined || t.amount === undefined)
            throw new Error("Missing Data");

        if (t.amount < 0)
            throw new Error("Negative Amount");

        valid.push(t);
    }
    catch (error) {
        invalid.push({ transaction: t, reason: error.message });
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful:", valid.length);
console.log("Failed:", invalid.length);