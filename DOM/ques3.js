const steps = document.querySelectorAll(".step");

const next = document.getElementById("next");
const back = document.getElementById("back");

const summary = document.getElementById("summary");

let currentStep = 0;
function showStep() {

    steps.forEach(function(step, index) {

        step.classList.toggle("active", index === currentStep);

    });

    back.style.display = currentStep === 0 ? "none" : "inline";

    next.textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

function validate() {

    const input = steps[currentStep].querySelector("input");

    const value = input.value.trim();

    if (value === "") {
        alert("Please fill the field");
        input.focus();
        return false;
    }

    if (input.id === "email") {

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            alert("Enter valid email");
            input.focus();
            return false;
        }
    }

    if (input.id === "password" && value.length < 6) {

        alert("Password must contain at least 6 characters");
        input.focus();
        return false;
    }

    return true;
}

next.addEventListener("click", function() {

    if (!validate()) return;

    if (currentStep < steps.length - 1) {

        currentStep++;

        showStep();

    } else {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        document.getElementById("myForm").style.display = "none";

        summary.innerHTML = `
            <h3>Registration Successful!</h3>
            <p>Name: ${escapeHTML(name)}</p>
            <p>Email: ${escapeHTML(email)}</p>
            <p>Password: Hidden</p>
        `;
    }
});

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

back.addEventListener("click", function() {

    if (currentStep > 0) {

        currentStep--;

        showStep();
    }
});

showStep();