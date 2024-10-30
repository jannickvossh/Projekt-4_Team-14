const slideshow = document.querySelector('.r--slideshow'); 
const slides = Array.from(document.querySelectorAll('.r--slide')); 
const slidesPerGroup = 1;
let memberSlideIndex = 0; 


let autoSlideInterval = null;

function scrollToCurrent() {
    const slideWidth = slides[0].offsetWidth + 20;
    slideshow.scrollTo({
        left: memberSlideIndex * slideWidth,
        behavior: 'smooth'
    });
}

function nextGroup() {
    memberSlideIndex += slidesPerGroup; 
    if (memberSlideIndex >= slides.length) { 
        memberSlideIndex = 0;
    }
    scrollToCurrent(); 
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextGroup, 3000);
}


function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


startAutoSlide();


slideshow.addEventListener('mousedown', stopAutoSlide);
slideshow.addEventListener('touchstart', stopAutoSlide);
slideshow.addEventListener('mouseup', startAutoSlide);  
slideshow.addEventListener('mouseleave', startAutoSlide); 
