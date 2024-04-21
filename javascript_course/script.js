// https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors

// https://www.theodinproject.com/lessons/node-path-javascript-library

const myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;
    }; 

}

function addBookToLibrary(event) { 
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.querySelector('input[name="read"]:checked').value === 'yes';

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    // TODO: update the UI to display the added book
    console.log('Book added:', newBook);
}
document.getElementById('mylibraryform').addEventListener('submit', addBookToLibrary);

const book = new Book("Harry Potter", "J.K Rowling", 32, true)
console.log(book.info());