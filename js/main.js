/* Funktionalitet til at åbne og lukke mobilmenu */

const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNav = document.getElementById('mobile-nav');

mobileNavToggle.addEventListener('click', () => {
    if (!mobileNav.classList.contains('main-nav-mobile--open')) {
        mobileNav.classList.add('main-nav-mobile--open');
    }
});

mobileNavClose.addEventListener('click', () => {
    if (mobileNav.classList.contains('main-nav-mobile--open')) {
        mobileNav.classList.remove('main-nav-mobile--open');
    }
});

/* Funktionalitet til accordions */

let accordions;
if (document.querySelectorAll('.accordion').length > 0) {
    accordions = document.querySelectorAll('.accordion');
}

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', () => {
        if (!accordions[i].classList.contains('accordion--expanded')) {
            accordions[i].classList.add('accordion--expanded');
        } else {
            accordions[i].classList.remove('accordion--expanded');
        }
    });
}