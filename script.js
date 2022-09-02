const log = console.log;

const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector("#modal-container");
const submitBtn = document.querySelector(".submit-btn");
const checkbox = document.querySelector("#checkbox");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");

// Main code

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  myLibrary.push(book_obj);
  log("hello baby");
}

const closeModalContainer = function (e) {
  "use strict";
  log(e.target);
  log(this);
  if (e.target !== this) {
    return;
  }
  modalContainer.classList.remove("show");
};

// Toggle dark mode

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

// Validation
function validate(book_obj) {
  if (title === "" || author === "" || pages === "") {
    log("Please fill in all the fields");
    return;
  }
}

// Form functionality

addBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

submitBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

modalContainer.onclick = closeModalContainer;
