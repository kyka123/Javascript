const box = document.querySelector(".hamburger__box");
const button = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
  box.classList.toggle("open");
  nav.classList.toggle("open");
});
