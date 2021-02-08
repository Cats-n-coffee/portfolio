// Toggle mobile menu
const mobileMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const screenBlur = document.getElementById('screen-blur');
const html = document.getElementsByTagName('html')[0];

mobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    navMenu.classList.toggle('show');
    html.classList.toggle('stop-scroll');
    screenBlur.classList.toggle('blur-screen');
}