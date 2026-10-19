// Store the total purchase amount
let total = 7500;

// Initialize the discount percentage
let discount = 0;

// Calculate the discount based on the purchase amount
if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
}

// Calculate the discount amount and final price
let discountAmount = total * discount / 100;
let finalPrice = Math.round(total - discountAmount);

// Display the results
console.log("Original Total: ₹" + total);
console.log("Discount: " + discount + "%");
console.log("Discount Amount: ₹" + Math.round(discountAmount));
console.log("Final Price: ₹" + finalPrice);