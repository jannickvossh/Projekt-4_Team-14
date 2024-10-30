document.addEventListener("DOMContentLoaded", function(){
    
    const stories = document.querySelectorAll('.story');
    const carousel = document.querySelector('.stories');

    let currentIndex = 0;
    let interval;

    function showStory(index) {
        stories.forEach((story, i) => {
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
        currentIndex = (currentIndex + 1) % stories.length;

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
