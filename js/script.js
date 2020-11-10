const menuBtn = document.querySelector('.menu-btn');

function toggleMenuBtn() {
    menuBtn.classList.toggle('menu-btn--active');
}

menuBtn.addEventListener('click', toggleMenuBtn);