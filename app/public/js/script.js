const nav = document.querySelector("nav");
const openBtn = document.querySelector(".header-btn");
const closeBtn = document.querySelector(".header-close");

openBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

const btnAside = document.querySelector(".btn-nav-second");
const navAside = document.querySelector(".nav-aside");

btnAside.addEventListener("click", () => {
  navAside.classList.toggle("open_side");
});

