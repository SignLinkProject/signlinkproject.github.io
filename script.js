document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.children);
    const nextButton = document.querySelector('.right-arrow');
    const prevButton = document.querySelector('.left-arrow');
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    let currentSlideIndex = 0;
  
    function updateCarousel() {
      const newTransform = -currentSlideIndex * (slideWidth + 20); // 20 is the total margin between slides
      carousel.style.transform = `translateX(${newTransform}px)`;
      prevButton.disabled = currentSlideIndex === 0;
      nextButton.disabled = currentSlideIndex === slides.length - 2; // -2 as we show 2 slides at a time
    }
  
    nextButton.addEventListener('click', () => {
      currentSlideIndex += 2;
      updateCarousel();
    });
  
    prevButton.addEventListener('click', () => {
      currentSlideIndex -= 2;
      updateCarousel();
    });
  
    updateCarousel();
  });
  