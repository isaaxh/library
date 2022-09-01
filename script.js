const log = console.log;

const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector("#modal-container");
const submitBtn = document.querySelector(".submit-btn");
const checkbox = document.querySelector("#checkbox");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");

log(readStatus);

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {}

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

addBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

submitBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

modalContainer.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
