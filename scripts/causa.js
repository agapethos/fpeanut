// First modal elements
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

// Second modal elements
const openModalButton2 = document.querySelector("#open-modal-2");
const closeModalButton2 = document.querySelector("#close-modal-2");
const modal2 = document.querySelector("#modal-2");
const fade2 = document.querySelector("#fade-2");

const toggleModal = (modal, fade) => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

// Event listeners for first modal
[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal(modal, fade));
});

// Event listeners for second modal
[openModalButton2, closeModalButton2, fade2].forEach((el) => {
  el.addEventListener("click", () => toggleModal(modal2, fade2));
});