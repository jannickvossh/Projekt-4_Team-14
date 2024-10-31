/* Funktionalitet til at åbne og lukke mobilmenu */

const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNav = document.getElementById('mobile-nav');

mobileNavToggle.addEventListener('click', () => {
    if (!mobileNav.classList.contains('main-nav-mobile--open')) {
        mobileNav.classList.add('main-nav-mobile--open');
        document.body.classList.add('body--no-scroll');
    }
});

mobileNavClose.addEventListener('click', () => {
    if (mobileNav.classList.contains('main-nav-mobile--open')) {
        mobileNav.classList.remove('main-nav-mobile--open');
        document.body.classList.remove('body--no-scroll');
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

        advanceCarousel(paginationDots, testimonialCarousels, testimonials);
    }
}

function advanceCarousel(pagination, carousel, items) {
    let itemWidth = items[0].getBoundingClientRect().width;
    let itemGap = items[1].getBoundingClientRect().x - items[0].getBoundingClientRect().x - itemWidth;
    let carouselWidth = itemWidth * items.length + itemGap * (items.length - 1);
    let carouselInView = carousel[0].getBoundingClientRect().width;
    let lastItemEnd = items[items.length - 1].getBoundingClientRect().x + itemWidth - carousel[0].getBoundingClientRect().x;

    for (let i = 0; i < pagination.length; i++) {
        pagination[i].addEventListener('click', () => {
            pagination.forEach((dot) => {
                dot.classList.remove('pagination-dot--active');
            });
            pagination[i].classList.add('pagination-dot--active');

            items.forEach((item) => {
                if ((itemWidth + itemGap) * i + carouselInView >= lastItemEnd) {
                    item.style.transform = "translateX(-" + (carouselWidth - carouselInView) + "px)";
                } else {
                    item.style.transform = "translateX(-" + (itemWidth + itemGap) * i + "px)";
                }
            });
        });
    }
}