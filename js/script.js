// JS ANIMATIONS

const timeline = gsap.timeline({defaults: {ease: 'power1.out'}});

timeline.to('.intro__text', {y: '0%', duration: 1, stagger: 0.25});
timeline.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
timeline.to('.intro', {y: '-100%', duration: 1}, "-=1");

// MOBILE NAVIGATION

const body = document.querySelector('body');
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

function disableScroll() {
    body.classList.toggle('disable-scroll');
}

function toggleNav() {
    toggleMenuBtn();
    displayNav();
    toggleFilter();
    disableScroll()
}

menuBtn.addEventListener('click', toggleNav);

// CAROUSEL IMAGES

const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.slider-btn--prev');
const nextBtn = document.querySelector('.slider-btn--next');

let index = 0;

function prevImg() {
    if (index === 0) {
        index = 3;
    }
    images[index % images.length].classList.replace('header__img--active', 'header__img--inactive');
    images[(index - 1) % images.length].classList.replace('header__img--inactive', 'header__img--active');
    index--;
}

function nextImg() {
    images[index % images.length].classList.replace('header__img--active', 'header__img--inactive');
    images[(index + 1) % images.length].classList.replace('header__img--inactive', 'header__img--active');
    index++;
}

// CAROUSEL TEXT

const textWrapper = document.querySelector('.hero__text-wrapper');
const heading = document.querySelector('.hero__heading');
const description = document.querySelector('.hero__description');

let textA = {
    heading: 'Discover innovative ways to decorate.',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
}
let textB = {
    heading: 'We are available all across the globe.',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
}
let textC = {
    heading: 'Manufactured with the best materials.',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
}

let texts = [textA, textB, textC];

function changeText() {
    textWrapper.classList.add('hero__text-wrapper--hidden');
    setTimeout(function() { 
        heading.textContent = texts[index % texts.length].heading;
        description.textContent = texts[index % texts.length].description;
        textWrapper.classList.remove('hero__text-wrapper--hidden');
    }, 600);
}

// CHANGE CONTENT (IMAGES + TEXT)

function prevContent() {
    prevImg();
    changeText();
}

function nextContent() {
    nextImg();
    changeText();
}

prevBtn.addEventListener('click', prevContent);
nextBtn.addEventListener('click', nextContent);

document.addEventListener('keydown', (event) => {
    if (event.which === 37) {
        prevContent();
    } else if (event.which === 39) {
        nextContent();
    }
});