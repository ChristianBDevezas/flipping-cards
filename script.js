const cards = document.querySelectorAll(".card");
// const cardItems = document.querySelectorAll(".card__item");
const showInfoButtons = document.querySelectorAll(".card__front__btn");
const closeInfoButtons = document.querySelectorAll(".card__back__btn");

showInfoButtons.forEach((showButton, index) => {
    showButton.addEventListener("click", () => {
        cards[index].classList.add("show");
    });
});

closeInfoButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", () => {
        cards[index].classList.remove("show");
    });
});