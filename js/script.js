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