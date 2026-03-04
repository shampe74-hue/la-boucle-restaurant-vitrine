const openBtn = document.querySelector(".header-btn");
const closeBtn = document.querySelector(".header-close");
const nav = document.querySelector("nav");

if (openBtn && nav) {
  openBtn.addEventListener("click", () => {
    nav.classList.add("open");
  });
}

if (closeBtn && nav) {
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("open");
  });
}

const btnAside = document.querySelector(".btn-nav-second");
const navAside = document.querySelector(".nav-aside");

if (btnAside && navAside) {
  btnAside.addEventListener("click", () => {
    navAside.classList.toggle("open_side");
  });
}
