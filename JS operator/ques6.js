
let count = 0;

function increment() {
    count++;
    console.log("Count: " + count);
}

function decrement() {
    count--;
    console.log("Count: " + count);
}

function showCount() {
    function display() {
        console.log("Current Count: " + count);
    }

    display();
}

increment();
increment();
increment();
decrement();
showCount();