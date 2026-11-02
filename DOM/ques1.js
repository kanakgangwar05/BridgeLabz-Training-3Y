"use strict";

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

addButton.addEventListener("click", function() {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Enter product name");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = productName;
    span.className = "product-name";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    productList.appendChild(li);

    productInput.value = "";
});

productList.addEventListener("click", function(event) {

    const li = event.target.closest("li");

    if (!li) return;

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {

        const span = li.querySelector(".product-name");

        if (li.querySelector("input")) return;

        const input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);
        input.focus();

        function saveEdit() {
            if (!input.isConnected) return;

            const newSpan = document.createElement("span");
            newSpan.className = "product-name";
            newSpan.textContent = input.value.trim() || span.textContent;

            input.replaceWith(newSpan);
        }

        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                saveEdit();
            }
        });
        document.addEventListener("click", function outsideClick(e) {

            if (!li.contains(e.target)) {
                saveEdit();
                document.removeEventListener("click", outsideClick);
            }
        });
    }
});