let cards = document.querySelectorAll("figure");

butt.addEventListener("change", function () {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.year < 2000) {
      cards[i].classList.toggle("hide");
    }
  }
});
butt2.addEventListener("change", function () {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.year > 2000) {
      cards[i].classList.toggle("hide");
    }
  }
});
