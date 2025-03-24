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
