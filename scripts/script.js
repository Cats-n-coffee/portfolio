// --------------- Toggle mobile menu
const mobileMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const screenBlur = document.getElementById('screen-blur');
const html = document.getElementsByTagName('html')[0];
const navbarItems = document.querySelectorAll('.navbar-item');

// Toggle the whole menu from hamburger menu
mobileMenu.addEventListener('click', toggleMobileMenu);

// Toggle the whole menu after clicking on an section
navbarItems.forEach(item => {
    item.addEventListener('click', closeMobileMenu)
});

function toggleMobileMenu() {
    if (!mobileMenu) { return }
    navMenu.classList.toggle('show');
    html.classList.toggle('stop-scroll');
    screenBlur.classList.toggle('blur-screen');
}

function closeMobileMenu() {
    if (!mobileMenu) { return }
    navMenu.classList.remove('show');
    html.classList.remove('stop-scroll');
    screenBlur.classList.remove('blur-screen');
}

// ----------------- Home page animation
// Randomize all the numbers for CSS position and animation duration for small and medium dots

window.addEventListener('load', () => {
    const homePage = document.getElementById('home');
    let screenWidth = homePage.clientWidth;

    var computedHeight = document.defaultView.getComputedStyle( homePage, null ).getPropertyValue( 'height' );

    //let screenHeight = homePage.offsetHeight;

    homePageAnimation(homePage, computedHeight, screenWidth)
})

function homePageAnimation(homePage, computedHeight, screenWidth) {
    var screenHeight = computedHeight.substr(0, computedHeight.length -2);
    screenHeight = parseInt(screenHeight);

    var dotCount = 0;
    console.log(screenHeight);
if (screenWidth < 600) {
    dotCount = Math.floor(Math.random() * (50 - 10) + 10); // Number of dots on the screen mobile and small tablets
}
else {
    dotCount = Math.floor(Math.random() * (100 - 10) + 10); // Number of dots on the screen for tablets and desktops
}

let smallClass = 'dot';
let mediumClass = 'dot-med';

function createDots(classDot) {
    var count = 0;
  
    while (count < dotCount) {
      let dotX = Math.floor(Math.random() * screenWidth); // Left position value
      let dotY = Math.floor(Math.random() * screenHeight); // Top position value
      let dotDuration = Math.floor(Math.random() * 10); // Animation duration
  
      const oneDot = `<span class="${classDot}" style="top: ${dotY}px; left: ${dotX}px; animation-duration: ${dotDuration}s;"></span>`;
      homePage.innerHTML += oneDot;
      count++;
    }
}

createDots(smallClass);
createDots(mediumClass);
}
