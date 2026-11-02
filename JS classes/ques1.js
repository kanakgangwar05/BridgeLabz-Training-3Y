"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 0.1);
    }

    display() {
        return `${this.name} | Price: ${this.price} | Category: ${this.category}`;
    }
}

let products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Phone", 20000, "Electronics"),
    new Product(3, "Mouse", 500, "Accessories")
];

products[0].applyDiscount();

let result = products.filter(p => p.price > 1000);

result.forEach(p => console.log(p.display()));