document.addEventListener("DOMContentLoaded", function(){
    
    const storiesArray = Array.from (document.getElementsByClassName('story'));
    const carousel = document.querySelector('.stories');

    let currentIndex = 0;
    let interval;

    function showStory(index) {
        storiesArray.forEach((story, i) => {
            if (i=== index) {
                story.classList.add("active");
                story.classList.remove("exit");
            } else {
                story.classList.remove("active");
                story.classList.add("exit");
            }
        });
    }

    showStory(currentIndex);

    function nextStory() {
        currentIndex = (currentIndex + 1) % storiesArray.length;

        showStory(currentIndex);
    }
    function startCarousel() {
    interval = setInterval(nextStory, 4000);
    }

    function stopCarousel() {
    clearInterval(interval);
    }

    startCarousel();

    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
});
