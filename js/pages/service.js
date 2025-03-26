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
  //our Ganres
  const emblaOurGanre = document.getElementById("emblaOurGanre");
  if (emblaOurGanre) {
    const embla3 = EmblaCarousel(emblaOurGanre, {
      loop: false,
      align: "start",
      slidesToScroll: 1,
    });

    const prev = document.getElementById("prevOne");
    const next = document.getElementById("nextOne");

    if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
    if (next) next.addEventListener("click", () => embla3.scrollNext());

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") embla3.scrollNext();
      if (event.key === "ArrowLeft") embla3.scrollPrev();
    });
  }
});
//
const emblaOurGanre = document.querySelector(".newRelease");
if (emblaOurGanre) {
  const embla3 = EmblaCarousel(emblaOurGanre, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prev = document.getElementById("prevThree");
  const next = document.getElementById("nextThree");

  if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
  if (next) next.addEventListener("click", () => embla3.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla3.scrollNext();
    if (event.key === "ArrowLeft") embla3.scrollPrev();
  });
}
// });
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
const trending = document.querySelector(".trendingNow");
if (trending) {
  const embla3 = EmblaCarousel(trending, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prev = document.getElementById("prevFour");
  const next = document.getElementById("nextFour");

  if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
  if (next) next.addEventListener("click", () => embla3.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla3.scrollNext();
    if (event.key === "ArrowLeft") embla3.scrollPrev();
  });
}
//
const mustWatched = document.querySelector(".mustWatched");
if (mustWatched) {
  const embla3 = EmblaCarousel(mustWatched, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prev = document.getElementById("prevFive");
  const next = document.getElementById("nextFive");

  if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
  if (next) next.addEventListener("click", () => embla3.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla3.scrollNext();
    if (event.key === "ArrowLeft") embla3.scrollPrev();
  });
}
//
const ebmlaOurGanre = document.querySelector(".ebmlaOurGanre");
if (ebmlaOurGanre) {
  const embla3 = EmblaCarousel(ebmlaOurGanre, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prev = document.getElementById("prevSix");
  const next = document.getElementById("nextSix");

  if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
  if (next) next.addEventListener("click", () => embla3.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla3.scrollNext();
    if (event.key === "ArrowLeft") embla3.scrollPrev();
  });
}
//
const topTenGanre = document.querySelector(".topTenGanre");
if (topTenGanre) {
  const embla3 = EmblaCarousel(topTenGanre, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prev = document.getElementById("prevSeven");
  const next = document.getElementById("nextSeven");

  if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
  if (next) next.addEventListener("click", () => embla3.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla3.scrollNext();
    if (event.key === "ArrowLeft") embla3.scrollPrev();
  });
}
//
const TrendingShows = document.querySelector(".TrendingShowsNow");
if (TrendingShows) {
  const embla3 = EmblaCarousel(TrendingShows, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prev = document.getElementById("prevEight");
  const next = document.getElementById("nextEight");

  if (prev) prev.addEventListener("click", () => embla3.scrollPrev());
  if (next) next.addEventListener("click", () => embla3.scrollNext());

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") embla3.scrollNext();
    if (event.key === "ArrowLeft") embla3.scrollPrev();
  });
}
