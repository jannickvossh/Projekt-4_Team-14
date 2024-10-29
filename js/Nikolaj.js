document.addEventListener("DOMContentLoaded", function(){

    const images = document.querySelectorAll('.story__img');

    if (images.length === 0) {
        console.log("Ingen billeder fundet i .story__img");
        return;
    }
    
    let currentIndex = 0;
    
    images[currentIndex].classList.add('active');

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add("active");
            } else {
                img.classList.remove("active");
            }
        })
    }


    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = "block";
        } else {
            img.style.display ="none";
        }
    });
 }
    showImage(currentIndex);

    function nextImage() {
        if (currentIndex >= images.length - 1) {
            currentIndex = 0;
    } else {
        currentIndex++;
    }
    showImage(currentIndex);
}
const interval = setInterval(nextImage, 3000);

})

