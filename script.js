const cards = document.querySelectorAll("figure");

after.addEventListener("change", function () {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.year < 2000) {
      cards[i].classList.add("hide");
    }
    if (
      (after.checked == true && before.checked == true) ||
      (after.checked == false && before.checked == false)
    ) {
      cards[i].classList.remove("hide");
    }
  }
});
before.addEventListener("change", function () {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.year > 2000) {
      cards[i].classList.add("hide");
    }
    if (
      (after.checked == true && before.checked == true) ||
      (after.checked == false && before.checked == false)
    ) {
      cards[i].classList.remove("hide");
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
