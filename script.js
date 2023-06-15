let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function() {
    this.read =!this.read;
}

function toggleRead(index) {
    console.log("Registerd click!");
    myLibrary[index].toggleRead();
    render();
}
/*
function bookMenuToggle() {
    document.querySelector("#new-book-form").style.display = "display: none";
    console.log("toggle");
}
*/
function render(){
    let libaryEl = document.querySelector("#content-grid");
    libaryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
            <div class="book">
                    <div class="book-header">
                        <p>${book.title}</p>
                        <div class="book-close" onclick="removeBook(${i})">x</div>
                    </div>
                    <div class="book-content">
                        <div class="author">Author: ${book.author}</div>
                        <div class="pages">pages: ${book.pages}</div>
                        <div class="read-status" onclick="toggleRead(${i})">Read status: ${book.read ? "read" : "not read"}</div>
                    </div>
            </div>
        `
        libaryEl.appendChild(bookEl);
        console.log(book.tile);
    }
}
function removeBook(index) {
    console.log(index);
    myLibrary.splice(index,1);
    render();

}

function addBookToLibrary() {

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    render();

}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})