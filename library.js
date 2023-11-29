function Book(name, pages, read) {
    this.name = name;
    this.pages = pages;
    this.read = read;
};
    let myLibrary = new Array();

let displayBooksCard = () =>{
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

myLibrary.forEach((element,index) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let name = document.createElement('p');
    let pages = document.createElement('p');
    let btnRemoveBook = document.createElement('button');
    let read = document.createElement('button');
    let cardIndex = index;

    name.innerText = element.name;
    name.setAttribute('class', 'bookTitle');
    card.appendChild(name);

    pages.innerText =  element.pages + " pages";
    pages.setAttribute('class', 'bookPages');
    card.appendChild(pages);

    read.innerHTML = element.read;
    read.onclick = () => {
        if(read.innerHTML == 'Not Read'){
            read.innerHTML = 'Read'
        }else{read.innerHTML = 'Not Read'
        }
    }
    btnReadInput.onclick = () => {
        if(btnReadInput.innerHTML == 'Not Read'){
            btnReadInput.innerHTML = 'Read'
        }else{btnReadInput.innerHTML = 'Not Read'
        }
    }
    card.appendChild(read);
    
    btnRemoveBook.innerHTML = '<img width="20px" height="20px" src="\close.svg" id="imgg">';
    btnRemoveBook.setAttribute('class', 'btnRemoveCard');
    btnRemoveBook.onclick = () =>{
        myLibrary.splice(cardIndex,1);
        displayBooksCard();
    }
    card.appendChild(btnRemoveBook);
    
    cardContainer.appendChild(card);
});
}

function addBook() {
    let nameInput = document.querySelector('#nameInput');
    let pagesInput = document.querySelector('#pagesInput');

    const newBook = new Book(nameInput.value, pagesInput.value, btnReadInput.innerHTML);
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
    if(!nameInput.value == '' && !pagesInput.value == ''){
    addBook();
    }else alert('All fields required!')
    nameInput.value = '';
    pagesInput.value = '';
    btnReadInput.innerHTML = 'Not Read';
    menu_icon_box.classList.remove("active");
    box.classList.remove("active_box");
}

let btnReadInput = document.querySelector('#btnReadInput');
btnReadInput.onclick = () => {
    if(btnReadInput.innerHTML == 'Not Read'){
        btnReadInput.innerHTML = 'Read'
    }else{btnReadInput.innerHTML = 'Not Read'
    }
}







