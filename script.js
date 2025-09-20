let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function mostrarSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  document.querySelector(".slides").style.transform = `translateX(${-slideIndex * 100}%)`;
}

prev.addEventListener("click", () => mostrarSlide(slideIndex - 1));
next.addEventListener("click", () => mostrarSlide(slideIndex + 1));

// Auto play
setInterval(() => {
  mostrarSlide(slideIndex + 1);
}, 5000);

// MENU HAMBÚRGUER
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
