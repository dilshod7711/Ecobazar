const deletedButtons = document.querySelectorAll(".deleted");
deletedButtons.forEach((count) => {
  count.addEventListener("click", () => {
    count.closest(".wishlist").remove();
  });
});
