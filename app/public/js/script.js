const openBtn = document.querySelector(".btn-nav");
const closeBtn = document.querySelector(".header-close");
const nav = document.querySelector(".nav-header");

if (openBtn && nav) {
  openBtn.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (closeBtn && nav) {
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const btnAside = document.querySelector(".btn-nav-second");
const navAside = document.querySelector(".nav-header-second");
const closeAside = document.querySelector(".header-close-second");

if (btnAside && navAside) {
  btnAside.addEventListener("click", () => {
    navAside.classList.add("active");
  });
}

if (closeAside && navAside) {
  closeAside.addEventListener("click", () => {
    navAside.classList.remove("active");
  });
}
