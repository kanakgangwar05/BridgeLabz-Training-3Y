"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully");
        } else {
            console.log("Book already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned");
    }
}

let books = [
    new Book("Java", "James", "101"),
    new Book("Python", "Guido", "102"),
    new Book("C++", "Bjarne", "103")
];

console.log("Available Books:");

books.filter(b => !b.isIssued)
     .forEach(b => console.log(b.title));

let searchISBN = "102";

let book = books.find(b => b.ISBN === searchISBN);

if (book) {
    book.issueBook();
} else {
    console.log("Book not found");
}