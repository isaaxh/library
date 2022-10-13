const log = console.log;

const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(["data-index"]);
const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector("#modal-container");
const submitBtn = document.querySelector(".submit-btn");
// const checkbox = document.querySelector("#checkbox");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
// const readStatusBox = document.querySelector(".read-status-checkbox");
const readStatusBtn = document.querySelector("#read-status-btn");
const errorInputContainers = document.querySelectorAll(".error-input");
const successMsgContainer = document.querySelector(".success-msg");
const removeBtns = document.querySelectorAll(["data-index"]);


// Main code
let myLibrary = [];
let inputStatus = "incomplete";
let formStatus = "close";


function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.addCard = function (title, author, pages, index) {
  let code = `
    <div class="card" data-index="${index}">
    <div class="book-content">
      <div class="title">"${title.value}"</div>
      <div class="author">${author.value}</div>
      <div class="pages">${pages.value} pages</div>
    </div>
    <div class="buttons">
      <button class="card-btns read-status-btn"  
      onclick="onClick(this)">Read</button>
      <button class="card-btns remove-btn" 
      data-index="${index}" 
      onclick="removeCard(this)">Remove Book</button>
    </div>`;

  cardContainer.innerHTML += code;
};

// Book.prototype.removeCard = function (cardIndex) {
//   this.cardIndex = cardIndex;
//   log(this.card);
// };

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  log(myLibrary);
}

function removeBookFromLibrary(index){
  myLibrary.splice(index, 1);
}

function removeCard(e){
  const cardIndex = e.getAttribute("data-index");
  removeBookFromLibrary(cardIndex);
  const card =document.querySelector(`[data-index="${cardIndex}"]`);
  card.remove();
  console.log(myLibrary);
}

const closeModalContainer = function (e) {
  "use strict";
  if (e.target === this) {
    modalContainer.classList.remove("show");
  }
};

function resetVariables() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

// Toggle dark mode

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

//readStatus button

function onClick(e) { //passing in the event object
  e.classList.toggle("read-true"); //using it to add class
}


// Validation

// function successAlert() {
//   successMsgContainer.setAttribute("data-success", "Book added successfully");
// }

// function removeSuccessAlert() {
//   successMsgContainer.removeAttribute(["data-success"]);
// }

function validate() {
  "use strict";

  if (title.value === "") {
    errorInputContainers[0].setAttribute("data-error", "Sorry, enter a title.");
    inputStatus = "incomplete";
  } else {
    errorInputContainers[0].removeAttribute("data-error");
  }
  if (author.value === "") {
    errorInputContainers[1].setAttribute(
      "data-error",
      "Sorry, enter an author's name."
    );
  } else {
    errorInputContainers[1].removeAttribute("data-error");
  }
  if (title.value !== "" && author.value !== "") {
    formStatus = "close";
    inputStatus = "complete";
  }
}

// Form functionality

addBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
  formStatus = "open";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
  if (inputStatus === "complete") {
    const newBook = new Book(
      title.value,
      author.value,
      pages.value,
    );
    newBook.addCard(title, author, pages, myLibrary.length);
    addBookToLibrary(newBook);
    resetVariables();
  
  }
  if (formStatus === "close") {
    modalContainer.classList.remove("show");
  }
});

modalContainer.addEventListener("click", closeModalContainer);
