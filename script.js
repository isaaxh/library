const log = console.log;

const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector("#modal-container");
const submitBtn = document.querySelector(".submit-btn");
const checkbox = document.querySelector("#checkbox");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");
const errorInputContainers = document.querySelectorAll(".error-input");

log(errorInputContainers[0].value);

// Main code

let myLibrary = [];
let formStatus = "close";

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
  if (e.target === this) {
    modalContainer.classList.remove("show");
  }
};

// Toggle dark mode

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

// Validation

function validate() {
  "use strict";

  if (title.value === "") {
    errorInputContainers[0].setAttribute("data-error", "Sorry, enter a title.");
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
  if (formStatus === "close") {
    modalContainer.classList.remove("show");
  }
});

modalContainer.addEventListener("click", closeModalContainer);
