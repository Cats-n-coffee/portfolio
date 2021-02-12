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
    item.addEventListener('click', toggleMobileMenu)
});

function toggleMobileMenu() {
    navMenu.classList.toggle('show');
    html.classList.toggle('stop-scroll');
    screenBlur.classList.toggle('blur-screen');
}

// --------------- Contact form validation
const form = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const messageDiv = document.getElementById('message-form');

form.addEventListener('submit', checkFields);

// User input error handling 
function checkFields(e) {
    e.preventDefault();

    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;

    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    // All errors found are pushed in an array
    var errorMessage = [];

    if (name === '') {
        errorMessage.push('Please enter a name.');
    }
    if (name.length < 3) {
        errorMessage.push('Name must be at least 3 characters.');
    }
    if (!regexEmail.test(email)) {
        errorMessage.push('Email must match this format: youremail@email.com.');
    }
    if (message === '' || message.length < 10) {
        errorMessage.push('Message must be at least 10 characters long.');
    }

    // If the errors array has errors stored, then display the errors
    if (errorMessage.length > 0) {
        displayErrorMessage(errorMessage);
    }
    // Otherwise display the 'sent' message
    else {
        displaySentMessage();
    }
}

// Loops through the errors array and displays all of them
function displayErrorMessage(messageArray) {
    messageArray.map(message => {
        messageDiv.innerText += message + " ";
    })

    messageDiv.classList.toggle('error');

    setTimeout(() => {
        messageDiv.classList.toggle('error');
        clearMessages()
    }, 3000);
}

// Displays a 'sent' message
function displaySentMessage() {
    messageDiv.innerText = 'Thank you! I\'ll reply as soon as I can.';
    messageDiv.classList.toggle('sent');

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    setTimeout(() => {
        messageDiv.classList.toggle('sent');
        clearMessages();
    }, 3000);
}

// Clears the div element to display other messages
function clearMessages() {
    while(messageDiv.firstChild) {
        messageDiv.removeChild(messageDiv.firstChild);
    }
}