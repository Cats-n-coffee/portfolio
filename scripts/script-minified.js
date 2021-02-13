const mobileMenu=document.getElementById("hamburger-menu"),navMenu=document.getElementById("nav-menu"),screenBlur=document.getElementById("screen-blur"),html=document.getElementsByTagName("html")[0],navbarItems=document.querySelectorAll(".navbar-item");function toggleMobileMenu(){mobileMenu&&(navMenu.classList.toggle("show"),html.classList.toggle("stop-scroll"),screenBlur.classList.toggle("blur-screen"))}function closeMobileMenu(){mobileMenu&&(navMenu.classList.remove("show"),html.classList.remove("stop-scroll"),screenBlur.classList.remove("blur-screen"))}mobileMenu.addEventListener("click",toggleMobileMenu),navbarItems.forEach(e=>{e.addEventListener("click",closeMobileMenu)});const form=document.getElementById("contact-form"),nameField=document.getElementById("name"),emailField=document.getElementById("email"),messageField=document.getElementById("message"),messageDiv=document.getElementById("message-form");function checkFields(e){e.preventDefault();const s=nameField.value,t=emailField.value,a=messageField.value;var l=[];""===s&&l.push("Please enter a name."),s.length<3&&l.push("Name must be at least 3 characters."),/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)||l.push("Email must match this format: youremail@email.com."),(""===a||a.length<10)&&l.push("Message must be at least 10 characters long."),l.length>0?displayErrorMessage(l):displaySentMessage()}function displayErrorMessage(e){e.map(e=>{messageDiv.innerText+=e+" "}),messageDiv.classList.toggle("error"),setTimeout(()=>{messageDiv.classList.toggle("error"),clearMessages()},3e3)}function displaySentMessage(){messageDiv.innerText="Thank you! I'll reply as soon as I can.",messageDiv.classList.toggle("sent"),nameField.value="",emailField.value="",messageField.value="",setTimeout(()=>{messageDiv.classList.toggle("sent"),clearMessages()},3e3)}function clearMessages(){for(;messageDiv.firstChild;)messageDiv.removeChild(messageDiv.firstChild)}form.addEventListener("submit",checkFields);const homePage=document.getElementById("home");let screenWidth=homePage.clientWidth,screenHeight=homePage.offsetHeight;var dotCount=0;dotCount=screenWidth<600?Math.floor(50*Math.random()):Math.floor(100*Math.random());let smallClass="dot",mediumClass="dot-med";function createDots(e){for(var s=0;s<dotCount;){let t=Math.floor(Math.random()*screenWidth);const a=`<span class="${e}" style="top: ${Math.floor(Math.random()*screenHeight)}px; left: ${t}px; animation-duration: ${Math.floor(10*Math.random())}s;"></span>`;homePage.innerHTML+=a,s++}}createDots(smallClass),createDots(mediumClass);