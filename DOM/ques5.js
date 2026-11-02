const search = document.getElementById("search");

const table = document.getElementById("studentTable");

const noResults = document.getElementById("noResults");

const rows = table.querySelectorAll("tr");

// Search when user types
search.addEventListener("input", function() {

    const searchValue = search.value.toLowerCase();

    let count = 0;

    rows.forEach(function(row) {

        const rowData = row.textContent.toLowerCase();
        if (rowData.includes(searchValue)) {

            row.style.display = "";

            count++;

        } else {

            row.style.display = "none";

        }

    });

    if (count === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});