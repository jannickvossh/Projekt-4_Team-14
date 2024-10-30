// Variabel-definistioner til senere brug
let currentIndex = 0;
const slideDots = document.querySelectorAll('.f--dot');



// Slideshow-funktioner til hero på forsiden
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

function whichSlideDots(index) {                            // Funktion som aktivere min 
    for (let i = 0; i < slideDots.length; i++) {            // Looper gennem alle nodes som er fundet og sat i node-listen i const ovenfor. (Her er også en variable med block-scope (let))
        slideDots[i].classList.remove('f--active-dot');     // Fjerner f--active-dot class fra alle dots (så jeg er sikker på der ikke findes rester på de andre dots)
    }
    slideDots[index].classList.add('f--active-dot');        // Tilføjer f--active-dot class til den valgte dot (så den highlighter)
    currentIndex = index;                                   // Laver det nuværende index om til den pipede værdi fra HTML-elementet der aktivere funktionen
    showSlide(currentIndex);                                // Kører showSlide function - dvs. navigere til den valgte slide ud fra dots index-nummer
    clearInterval(heroSlideInterval);                       // Deaktivere timer-funktionen
}


// Ligegyldig funktion til at indsætter overskrifter (projekt krav)
addEventListener("DOMContentLoaded", () => {                                            // Kan også skrives som "Ikke arrowfunktion" --> "function(event)" = "(event) =>"
let frederiksLigegyldigeObject = {
    "0":"Læs CAN Europe's anbefalinger til EU's position på COP29",
    "1":"Høringssvar til udkast til rådskonklusioner om EU’s position til COP29",
    "2":"92-gruppens Høringssvar til Danmarks Nationale Energi- og Klimaplan (NECP)",
    "3":"Fælles høringssvar ifm. UM's organisationsstrategi om Verdensbanken"}
let frederiksLigegyldigeArray = Object.values(frederiksLigegyldigeObject);

console.log(Array.isArray(frederiksLigegyldigeArray))

console.log(frederiksLigegyldigeArray)

const findOverskrifter = document.querySelectorAll('.big-story__title');

console.log(findOverskrifter.length);

function insertTitles() {
    for (let i = 0; i < findOverskrifter.length; i++) {
        findOverskrifter[i].innerHTML = frederiksLigegyldigeArray[i]
    }
}

insertTitles(); 
});