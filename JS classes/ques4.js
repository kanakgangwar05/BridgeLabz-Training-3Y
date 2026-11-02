"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let html = "<form id='myForm'>";

        this.fields.forEach(field => {
            html += `<label>${field.label}</label>`;
            html += `<input type="${field.type}" name="${field.name}"><br><br>`;
        });

        html += "<button type='submit'>Submit</button>";
        html += "</form>";

        document.getElementById("formContainer").innerHTML = html;

        document.getElementById("myForm").onsubmit = (e) => {
            e.preventDefault();
            console.log(this.getFormData());
        };
    }

    getFormData() {
        let data = {};

        this.fields.forEach(field => {
            data[field.name] = document.querySelector(
                `[name="${field.name}"]`
            ).value;
        });

        return data;
    }
}

let fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

let form = new FormBuilder(fields);
form.createForm();