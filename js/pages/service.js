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
const openBtn = document.getElementById("open-modal");
const dialog = document.getElementById("dialog");

openBtn.addEventListener("click", () => dialog.showModal());

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();

  const isInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!isInDialog) {
    dialog.close();
  }
});
