// Image slideshow functions
let slideIndex = 1;
showSlides(slideIndex);
//main.js

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
// Countdown timer function
function countdown() {
  // 1. Convert input string to a number
  let seconds = Number(document.getElementById("seconds").value);
  
  // 2. Target the display element
  const display = document.getElementById("timer");
    
  // My subtraction syntax
  function tick() {
     seconds = seconds -1;
    
    display.innerHTML = seconds;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      alert("Time's up!");
    }
  }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  tick();
}
