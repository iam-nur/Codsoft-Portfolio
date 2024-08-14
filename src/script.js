document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const work1 = document.querySelector(".work1");
  const work2 = document.querySelector(".work2");

  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    work1.classList.add("hidden");
    work1.classList.remove("visible");

    work2.classList.add("visible");
    work2.classList.remove("hidden");
  });

  prevButton.addEventListener("click", function (event) {
    event.preventDefault();
    work2.classList.add("hidden");
    work2.classList.remove("visible");
    work1.classList.add("visible");
    work1.classList.remove("hidden");
  });
});