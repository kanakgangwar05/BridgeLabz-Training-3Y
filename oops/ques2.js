let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];
function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(menuItem => menuItem.name === item);
        if (!food) {
            throw new Error(item + " is not available in the menu!");
        }

        return food.price;
    });
    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}
try {
    let totalBill = calculateBill(["Pizza", "Burger", "Pasta"]);
    console.log("Total Bill: Rs.", totalBill);
} catch (error) {
    console.log("Error:", error.message);
}
try {
    let totalBill = calculateBill(["Pizza", "Sushi"]);
    console.log("Total Bill: Rs.", totalBill);
} catch (error) {
    console.log("Error:", error.message);
}