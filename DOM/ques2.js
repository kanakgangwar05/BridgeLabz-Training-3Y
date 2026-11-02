const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const reset = document.getElementById("reset");

const maxLength = 100;

// Update counter
function updateCounter() {

    let remaining = maxLength - textArea.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.className = "";

    if (remaining <= 0) {
        counter.classList.add("red");
    }
    else if (remaining <= 20) {
        counter.classList.add("yellow");
    }
}

textArea.addEventListener("keydown", function(event) {

    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "Tab", "Home", "End"
    ];

    if (textArea.value.length >= maxLength &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey && !event.metaKey) {

        event.preventDefault();
    }
});

textArea.addEventListener("input", updateCounter);

// Reset button
reset.addEventListener("click", function() {

    textArea.value = "";

    updateCounter();
});