const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const closeItem = document.querySelector(".close");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hide");
  closeItem.classList.add("close--show");
  body.classList.add("body--no-scroll");
});

closeItem.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hide");
  closeItem.classList.remove("close--show");
  body.classList.remove("body--no-scroll");
});
