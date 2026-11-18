class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance!");
        }

        return this.distance * 10;
    }
}
let driver1 = new Driver("Amit", 4.8, "Car");

console.log("Driver:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);

try {
    let trip1 = new Trip("Mathura", "Agra", 60);
    console.log("Fare: Rs.", trip1.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    let trip2 = new Trip("Delhi", "Noida", -5);
    console.log("Fare: Rs.", trip2.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}