/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const changeHeaderBackground = () => {
    const header = document.querySelector('.header');
    
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header
    if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
};
window.addEventListener('scroll', changeHeaderBackground);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
});

scrollReveal.reveal('.home__title, .home__subtitle', {
    origin: 'top',
    interval: 100,
});
scrollReveal.reveal('.home__image', {
    origin: 'bottom',
    interval: 100,
});

