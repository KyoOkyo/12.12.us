let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        dots[i].classList.toggle('active', i === index);
    });
}

// Function to show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to show the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Function to jump to a specific slide via dots
function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Automatic slide rotation every 3 seconds
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Adjust the interval as needed
}

// Initialize the slideshow
showSlide(currentIndex);
autoSlide(); // Start automatic slideshow

// Optional: Add event listeners for navigation buttons (if you have buttons with IDs 'prevButton' and 'nextButton')
document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('nextButton').addEventListener('click', nextSlide);

// Optional: Add event listeners for dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => currentSlide(i));
});
window.addEventListener('load', function() {
  const music = document.getElementById('backgroundMusic');
  music.play();
});
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const videoContainer = document.querySelector('.video-container');

function showSlides() {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slideIndex++;
  
  // Loop back to the first slide if we exceed the total number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
    videoContainer.style.display = 'block';  // Show the video after the slideshow ends
  }

  slides[slideIndex - 1].style.display = 'block';  // Show the current slide

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();  // Start the slideshow

document.querySelector('.video-container').style.display = 'block'; // Show the video container after the slides

