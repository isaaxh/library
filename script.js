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
const successMsgContainer = document.querySelector(".success-msg");

//log(errorInputContainers[0].value);
//log(successMsgContainer);

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

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  log(myLibrary);
}

const closeModalContainer = function (e) {
  "use strict";
  log(e.target);
  if (e.target === this) {
    modalContainer.classList.remove("show");
  }
};

function resetVariables() {
  title.value = "";
  author.value = "";
  pages.value = "";
  readStatus.value = "off";
}

// Toggle dark mode

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

// Validation

function successAlert() {
  successMsgContainer.setAttribute("data-success", "Book added successfully");
  log(successMsgContainer.dataset.success);
}

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
      readStatus.value
    );
    addBookToLibrary(newBook);
    resetVariables();
    successAlert();
    log(newBook);
  }
  if (formStatus === "close") {
    modalContainer.classList.remove("show");
  }
});

modalContainer.addEventListener("click", closeModalContainer);
