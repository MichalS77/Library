function Book(name, pages) {
    this.name = name;
    this.pages = pages;
};

const book1 = new Book('book1', 25);
const book2 = new Book('book2', 26);

let myLibrary = [book1, book2];
console.log(myLibrary);

