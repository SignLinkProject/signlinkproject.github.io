document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = Array.from(carousel.children);
  const nextButton = document.querySelector(".right-arrow");
  const prevButton = document.querySelector(".left-arrow");

  let slideIndex = 0; // Current slide index

  // Function to move the carousel
  function moveCarousel(newIndex) {
    const distance = newIndex * -100; // Assuming each slide takes 100% of the carousel container width
    carousel.style.transform = `translateX(${distance}%)`;
    slideIndex = newIndex; // Update the current slide index
  }

  // Next button click event
  nextButton.addEventListener("click", () => {
    if (slideIndex < slides.length - 2) {
      // -2 because we are showing 2 slides at a time
      moveCarousel(slideIndex + 2);
    }
  });

  // Previous button click event
  prevButton.addEventListener("click", () => {
    if (slideIndex > 0) {
      moveCarousel(slideIndex - 2);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sandwichButton = document.querySelector(".sandwich-menu");
  const menu = document.querySelector(".menu");

  sandwichButton.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
