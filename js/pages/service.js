// const navMenu = document.getElementById("nav-menu");
// const navToggle = document.getElementById("nav-toggle");
// const navClose = document.getElementById("nav-close");

// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("showMenu");
//   });
// }

// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("showMenu");
//   });
// }
// const emblaNode = document.querySelector(".embla");
// const embla = EmblaCarousel(emblaNode, {
//   loop: true,
//   align: "start",
//   slidesToScroll: 1,
// });

// setInterval(() => {
//   embla.scrollNext();
// }, 5000);

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

document.addEventListener("DOMContentLoaded", () => {
  const emblaNode1 = document.querySelector(".embla");
  if (emblaNode1) {
    const embla1 = EmblaCarousel(emblaNode1, {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    });

    setInterval(() => {
      embla1.scrollNext();
    }, 5000);
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.addEventListener("click", () => {
      embla1.scrollPrev();
    });

    nextButton.addEventListener("click", () => {
      embla1.scrollNext();
    });
  }

  const emblaNode2 = document.getElementById("embla2");
  if (emblaNode2) {
    const embla2 = EmblaCarousel(emblaNode2, {
      loop: false,
      align: "start",
      slidesToScroll: 1,
    });

    const prev = document.getElementById("prevTwo");
    const next = document.getElementById("nextTwo");

    if (prev) prev.addEventListener("click", () => embla2.scrollPrev());
    if (next) next.addEventListener("click", () => embla2.scrollNext());

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") embla2.scrollNext();
      if (event.key === "ArrowLeft") embla2.scrollPrev();
    });
  }
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
