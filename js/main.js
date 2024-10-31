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

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].firstElementChild.addEventListener('click', () => {
            if (!accordions[i].classList.contains('accordion--expanded')) {
                accordions[i].classList.add('accordion--expanded');
            } else {
                accordions[i].classList.remove('accordion--expanded');
            }
        });
    }
}

/* Jannicks kode – Karrusel til udtalelser */

if (document.querySelector('.j--carousel')) {
    const testimonialCarousels = document.querySelectorAll('.j--carousel');
    const paginationDots = document.querySelectorAll('.pagination-dot');

    for (let i = 0; i < testimonialCarousels.length; i++) {
        const testimonials = testimonialCarousels[i].querySelectorAll('.card');
        let testimonialWidth = testimonials[0].getBoundingClientRect().width;
        let testimonialGap = testimonials[1].getBoundingClientRect().x - testimonials[0].getBoundingClientRect().x - testimonialWidth;
        let carouselWidth = testimonialWidth * testimonials.length + testimonialGap * (testimonials.length - 1);
        let carouselInView = testimonialCarousels[0].getBoundingClientRect().width;
        let carouselPos = testimonialCarousels[0].getBoundingClientRect().x
        let testimonialsCurrentPos = 0;

        for (let j = 0; j < paginationDots.length; j++) {
            paginationDots[j].addEventListener('click', () => {
                paginationDots.forEach((dot) => {
                    dot.classList.remove('pagination-dot--active');
                });
                paginationDots[j].classList.add('pagination-dot--active');

                testimonialsCurrentPos = (testimonialWidth + testimonialGap) * j;

                testimonials.forEach((testimonial) => {
                    if (testimonials[testimonials.length - 1].getBoundingClientRect().x + testimonials[testimonials.length - 1].getBoundingClientRect().width < carouselInView) {
                        testimonial.style.transform = "translateX(-" + (carouselWidth - carouselInView) + "px)";
                    } else {
                        testimonial.style.transform = "translateX(-" + testimonialsCurrentPos + "px)";
                    }
                });
            });
        }
    }
}