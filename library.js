let table = document.getElementById("myTable");

function Book(name, pages) {
    this.name = name;
    this.pages = pages;
};

const book1 = new Book('book1', 25);
const book2 = new Book('book2', 26);

let myLibrary = [book1, book2];
console.log(myLibrary);

let displayBooksCard = () =>{
    const cardContainer = document.getElementById('cardContainer'); // Assuming you have a container with this ID in your HTML
    cardContainer.innerHTML = '';

myLibrary.forEach((element,index) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let name = document.createElement('h2');
    let pages = document.createElement('h3');
    let btnRemoveBook = document.createElement('btn');
    let cardIndex = index;
    
    name.innerText = element.name;
    card.appendChild(name);

    pages.innerText = "pages: " + element.pages;
    card.appendChild(pages);
    
    btnRemoveBook.innerHTML = '<img width="40px" height="40px" src="\Plus_symbol.svg.png" id="imgg">';
    btnRemoveBook.onclick = () =>{
        myLibrary.splice(cardContainer,1);
        displayBooksCard();
    }
    card.appendChild(btnRemoveBook);
    
    cardContainer.appendChild(card);
});
}

displayBooksCard();


function addBook() {
    let nameInput = document.querySelector('#nameInput');
    const pagesInput = document.querySelector('#pagesInput');

    const newBook = new Book(nameInput.value, pagesInput.value);
    myLibrary.push(newBook);
    displayBooksCard();
}

let menu_icon_box = document.querySelector(".menu_icon_box");
let box = document.querySelector(".box");


menu_icon_box.onclick = () => {
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}

let btnAddBook = document.querySelector('#btnAddBook');

btnAddBook.onclick = () => {
    addBook();
    nameInput.value = '';
    pagesInput.value = '';
}






