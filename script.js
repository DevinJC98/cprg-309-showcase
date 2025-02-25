const cards = document.querySelectorAll("figure");

before.addEventListener("change", function () {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.year < 2000) {
      cards[i].classList.toggle("hide");
    }
  }
});
after.addEventListener("change", function () {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.year > 2000) {
      cards[i].classList.toggle("hide");
    }
  }
});

filterButton.addEventListener("click", function () {
  filterholder.classList.toggle("hide");
  if (filterButton.innerHTML == "Open Filter") {
    filterButton.innerHTML = "Close Filter";
  } else {
    filterButton.innerHTML = "Open Filter";
  }
});
