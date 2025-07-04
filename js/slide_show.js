let slideIndex = 1;
showSlides(slideIndex);

// Auto slideshow: change slide every 3 seconds
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
    resetInterval();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
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
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Optional: Reset interval when user interacts
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 3000);
}
