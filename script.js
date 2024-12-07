// Select elements
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0; // Current slide index
const totalSlides = dots.length; // Total number of slides

// Function to update the carousel position
function updateCarousel() {
  const slideWidth = carouselContainer.children[0].clientWidth; // Width of each slide
  const offset = -currentIndex * slideWidth; // Calculate offset for current slide
  carouselContainer.style.transform = `translateX(${offset}px)`; // Move the carousel
  updateDots();
}

// Function to update dot styles
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Event listener for the next button
nextButton.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateCarousel();
});

// Event listener for the previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Loop back to the last slide
  }
  updateCarousel();
});

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize carousel
updateCarousel();