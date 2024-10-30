let currentIndex = 0;
const slideDots = document.querySelectorAll('.f--dot');

function showSlide(index) {
    const slides = document.querySelectorAll('.big-story');
    const totalSlides = slides.length;

    // Loop slides
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
    for (let i = 0; i < slideDots.length; i++) {
        slideDots[i].classList.remove('f--active-dot');
    }
    slideDots[currentIndex].classList.add('f--active-dot');
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Autoplay
let heroSlideInterval = setInterval(nextSlide, 5000); // Skifter hvert 3. sekund

function whichSlideDots(index) {
    for (let i = 0; i < slideDots.length; i++) {
        slideDots[i].classList.remove('f--active-dot');
    }
    slideDots[index].classList.add('f--active-dot');
    currentIndex = index;
    showSlide(currentIndex);
    clearInterval(heroSlideInterval);
}