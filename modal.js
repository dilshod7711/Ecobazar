const btn = document.getElementById("btn");
const overlayModal = document.getElementById("overlay-modal");
const clearModal = document.getElementById("clear-modal");
const cart = document.getElementById("cart");
const overlayDrow = document.getElementById("overlay-drow");
const closeDrow = document.getElementById("close-drow");
const burger = document.getElementById("burger");

btn.addEventListener("click", () => {
  overlayModal.classList.remove("hidden");
});
clearModal.addEventListener("click", () => {
  overlayModal.classList.add("hidden");
});
cart.addEventListener("click", () => {
  overlayDrow.classList.remove("hidden");
  setTimeout(() => overlayDrow.classList.remove("opacity-0"), 10);
    drawer.classList.remove("translate-x-full");
    document.body.style.overflow = 'hidden'
});

closeDrow.addEventListener("click", () => {
  drawer.classList.add("translate-x-full");
  overlayDrow.classList.add("opacity-0");
    setTimeout(() => overlayDrow.classList.add("hidden"), 500);
    document.body.style.overflow = "";
});

burger.addEventListener("click", () => {
  overlayDrow.classList.remove("hidden");
  setTimeout(() => overlayDrow.classList.remove("opacity-0"), 10);
  drawer.classList.remove("translate-x-full");
});

closeDrow.addEventListener("click", () => {
  drawer.classList.add("translate-x-full");
  overlayDrow.classList.add("opacity-0");
  setTimeout(() => overlayDrow.classList.add("hidden"), 500);
});

deleted.addEventListener("click", () => {});
