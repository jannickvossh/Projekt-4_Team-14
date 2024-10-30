document.addEventListener("DOMContentLoaded", function(){
    
    const stories = document.querySelectorAll('.story');

    let currentIndex = 0;

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
    const interval = setInterval(nextStory, 3000);
});
