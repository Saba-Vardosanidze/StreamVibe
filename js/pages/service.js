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
