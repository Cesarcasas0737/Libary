class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

    toggleRead() {
      this.read = !this.read;
    }
  }

  let myLibrary = [];

  function toggleRead(index) {
    console.log("Registered click!");
    myLibrary[index].toggleRead();
    render();
  }

  function render() {
    let libraryEl = document.querySelector("#content-grid");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
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
            <div class="pages">Pages: ${book.pages}</div>
            <div class="read-status" onclick="toggleRead(${i})">Read status: ${
        book.read ? "read" : "not read"
      }</div>
          </div>
        </div>
      `;
      libraryEl.appendChild(bookEl);
      console.log(book.title);
    }
  }

  function removeBook(index) {
    console.log(index);
    myLibrary.splice(index, 1);
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
  newBookbtn.addEventListener("click", function () {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
  });

  document
    .querySelector("#new-book-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      addBookToLibrary();
    });