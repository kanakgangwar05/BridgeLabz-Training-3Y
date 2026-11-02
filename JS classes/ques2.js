"use strict";

function validateForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let patterns = [
        /^[A-Za-z]+$/,
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        /^\d{10}$/,
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/
    ];

    let fields = [name, email, phone, password];

    for (let i = 0; i < fields.length; i++) {
        if (patterns[i].test(fields[i].value)) {
            fields[i].style.border = "2px solid green";
        } else {
            fields[i].style.border = "2px solid red";
            console.log(fields[i].placeholder + " is invalid");
        }
    }
}