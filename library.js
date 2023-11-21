let table = document.getElementById("myTable");

function Book(name, pages) {
    this.name = name;
    this.pages = pages;
};

const book1 = new Book('book1', 25);
const book2 = new Book('book2', 26);

let myLibrary = [book1, book2];
console.log(myLibrary);

/* let displayBooks = () => { 
    table.innerHTML = '';
    
    myLibrary.forEach((book) => {
    let row = document.createElement('tr')
    
    let nameCell = document.createElement('td')
    nameCell.innerText = book.name
    row.appendChild(nameCell)
    
    let pagesCell = document.createElement('td')
    pagesCell.innerText = book.pages
    row.appendChild(pagesCell)
    
    let buttonCell = document.createElement('td')
    let button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener ('click', () => addBook(index));
    buttonCell.appendChild(button);
    
    table.appendChild(row);
    });
} */

let displayBooksCard = () =>{
    const cardContainer = document.getElementById('cardContainer'); // Assuming you have a container with this ID in your HTML
    cardContainer.innerHTML = '';

myLibrary.forEach((element,index) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let name = document.createElement('h2');
    let pages = document.createElement('h3');
    name.innerText = element.name;
    card.appendChild(name);

    pages.innerText = "pages: " + element.pages;
    card.appendChild(pages)
    cardContainer.appendChild(card);
});
}

displayBooksCard();

function addBook() {
    const nameInput = prompt ('Enter book name: ')
    const pagesInput = prompt ('Enter number of pages: ')

    const newBook = new Book(nameInput, pagesInput);
    myLibrary.push(newBook);
    displayBooks();
}


