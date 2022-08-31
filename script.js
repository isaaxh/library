const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector(".modal-container");
const submitBtn = document.querySelector(".submit-btn");
const checkbox = document.querySelector("#checkbox");
const header = document.querySelector("header");
const cards = document.querySelectorAll(".card");
const cardBtns = document.getElementsByClassName("card-btns");
const allElements = document.getElementsByClassName("dark-mode");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("dark");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("dark");
  }
  for (let i = 0; i < cardBtns.length; i++) {
    cardBtns[i].classList.toggle("dark");
  }
});

addBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

submitBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
f;
