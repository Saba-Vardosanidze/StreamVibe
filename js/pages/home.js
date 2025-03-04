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
