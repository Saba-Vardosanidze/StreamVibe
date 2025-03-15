AOS.init();
document.addEventListener("DOMContentLoaded", () => {
  const emblaNode = document.querySelector(".embla");

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

  const prevMedia = document.getElementById("prevmedia");
  const nextMedia = document.getElementById("nextmedia");

  if (prevMedia) prevMedia.addEventListener("click", () => embla.scrollPrev());
  if (nextMedia) nextMedia.addEventListener("click", () => embla.scrollNext());

  const dots = document.querySelectorAll(".embla__dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const slidesPerPage = 5;
      const slideIndex = index * slidesPerPage;

      embla.scrollTo(slideIndex);
    });
  });
});
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

const mainContainer = document.querySelectorAll(".questionSections");
mainContainer.forEach((singleCard) => {
  const openBtn = singleCard.querySelector(".openBtn");
  const closeBtn = singleCard.querySelector(".closeBtn");
  const answer = singleCard.querySelector(".hideelements");

  openBtn.addEventListener("click", () => {
    answer.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    answer.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  });
});

const monthlyPrice = document.getElementById("monthlyPrice");
const yearPrice = document.getElementById("yearPrice");
const packetLimit = document.querySelectorAll(".packetDeadline");
const basicPlan = document.getElementById("basicPlan");
const standardPlan = document.getElementById("standardPlan");
const premiumPlan = document.getElementById("premiumPlan");

monthlyPrice.addEventListener("click", function () {
  packetLimit.forEach((element) => {
    element.textContent = "/month";
  });
  basicPlan.textContent = "$9.99";
  standardPlan.textContent = "$12.99";
  premiumPlan.textContent = "$14.99";
});

yearPrice.addEventListener("click", function () {
  packetLimit.forEach((element) => {
    element.textContent = "/year";
  });
  basicPlan.textContent = "$109.99";
  standardPlan.textContent = "$144.99";
  premiumPlan.textContent = "$169.99";
});
