import {ui} from "./moduels/ui.js";
import {store} from "./moduels/store.js"

class Books {
  constructor(Title, Author){
    this.title = Title;
    this.author = Author;
  }
}

// add book//
document.addEventListener('DOMContentLoaded',ui.display())
document.querySelector('#form').addEventListener('submit', (e) => {
  const Title = document.querySelector('#title').value;
  const Author = document.querySelector('#author').value;
  const booksCollection = store.getBooksCollection();
  const book = new Books(Title, Author);
  store.setBook(book);
})
//delete Book//
const remove = document.querySelector('.bookList');
remove.addEventListener('click', (e) => {
  store.deleteBooks(e.target.previousElementSibling.firstElementChild);
  location.reload();
})

