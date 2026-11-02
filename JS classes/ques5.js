"use strict";

function bookTicket() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let seats = Number(document.getElementById("seats").value);

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name) ||
        !emailPattern.test(email) ||
        seats < 1 || seats > 10 || !Number.isInteger(seats)) {

        console.log("Invalid booking details");
        return;
    }

    let booking = {
        name: name,
        email: email,
        seats: seats
    };

    console.log("Ticket Booked Successfully!");
    console.log(booking);
}