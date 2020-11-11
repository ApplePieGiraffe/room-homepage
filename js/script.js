// MOBILE NAVIGATION

const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');
const filter = document.querySelector('.bg-filter');

function toggleMenuBtn() {
    menuBtn.classList.toggle('menu-btn--active');
}

function displayNav() {
    if (headerNav.classList.contains('header__nav--inactive')) {
        headerNav.classList.replace('header__nav--inactive', 'header__nav--active');
    } else {
        headerNav.classList.replace('header__nav--active', 'header__nav--inactive');
    }
}

function toggleFilter() {
    filter.classList.toggle('bg-filter--active');
}

function toggleNav() {
    toggleMenuBtn();
    displayNav();
    toggleFilter();
}

menuBtn.addEventListener('click', toggleNav);

// CAROUSEL

const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.slider-btn--prev');
const nextBtn = document.querySelector('.slider-btn--next');
let index = 0;

function prev() {
    if (index === 0) {
        index = 3;
    }
    images[index % images.length].classList.replace('header__img--active', 'header__img--inactive');
    images[(index - 1) % images.length].classList.replace('header__img--inactive', 'header__img--active');
    index--;
}

function next() {
    images[index % images.length].classList.replace('header__img--active', 'header__img--inactive');
    images[(index + 1) % images.length].classList.replace('header__img--inactive', 'header__img--active');
    index++;
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
