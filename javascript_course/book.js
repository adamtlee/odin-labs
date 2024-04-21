// https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;
    }; 

}

const book = new Book("Harry Potter", "J.K Rowling", 32, true)
console.log(book.info());