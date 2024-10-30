const rSlideshow = document.querySelector('.r--slideshow'); 
const rSlides = Array.from(document.querySelectorAll('.r--slide')); 
const slidesPerGroup = 1;
let memberSlideIndex = 0; 


let autoSlideInterval = null;

function scrollToCurrent() {
    const slideWidth = rSlides[0].offsetWidth + 20;
    rSlideshow.scrollTo({
        left: memberSlideIndex * slideWidth,
        behavior: 'smooth'
    });
}

function nextGroup() {
    memberSlideIndex += slidesPerGroup; 
    if (memberSlideIndex >= rSlides.length) { 
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


rSlideshow.addEventListener('mouseover', stopAutoSlide);
rSlideshow.addEventListener('mouseleave', startAutoSlide);
rSlideshow.addEventListener('DOMContentLoaded', startAutoSlide);