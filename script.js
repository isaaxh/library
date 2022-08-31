const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector(".modal-container");
const submitBtn = document.querySelector(".submit-btn");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

addBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

submitBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
