const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showMenu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  });
}
const emblaNode = document.querySelector(".embla");
const embla = EmblaCarousel(emblaNode, {
  loop: true,
  align: "start",
  slidesToScroll: 1,
});

setInterval(() => {
  embla.scrollNext();
}, 5000);

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  embla.scrollPrev();
});

nextButton.addEventListener("click", () => {
  embla.scrollNext();
});
document.addEventListener("DOMContentLoaded", () => {
  const emblaNode = document.getElementById("embla2");

  const options = {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  };

  const embla = EmblaCarousel(emblaNode, options);

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if (prev) prev.addEventListener("click", () => embla.scrollPrev());
  if (next) next.addEventListener("click", () => embla.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla.scrollNext();
    if (event.key === "ArrowLeft") embla.scrollPrev();
  });
