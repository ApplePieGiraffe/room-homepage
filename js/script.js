const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');
const filter = document.querySelector('.filter');

function toggleMenuBtn() {
    menuBtn.classList.toggle('menu-btn--active');
}

function displayNav() {
    headerNav.classList.toggle('header__nav--active');
}

function toggleFilter() {
    filter.classList.toggle('filter--active');
}

function toggleNav() {
    toggleMenuBtn();
    displayNav();
    toggleFilter();
}

menuBtn.addEventListener('click', toggleNav);