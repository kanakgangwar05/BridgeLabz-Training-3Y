function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(this.brand + " " + this.model);
};

let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Hyundai", "Creta");

car1.getDetails();
car2.getDetails();