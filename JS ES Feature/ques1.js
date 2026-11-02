"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let valid = [];
let invalid = [];

for (let value of apiData) {
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    if (value === " " || !Number.isFinite(num)) {
        invalid.push(value);
    } else {
        valid.push(num);
    }

    console.log("Value:", value);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);
    console.log("----------------");
}

console.log("Valid Numbers:", valid);
console.log("Invalid Values:", invalid);