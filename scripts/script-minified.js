window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("home");let s=e.clientWidth;homePageAnimation(e,e.offsetHeight,s)});const mobileMenu=document.getElementById("hamburger-menu"),navMenu=document.getElementById("nav-menu"),screenBlur=document.getElementById("screen-blur"),html=document.getElementsByTagName("html")[0],navbarItems=document.querySelectorAll(".navbar-item");function toggleMobileMenu(){mobileMenu&&(navMenu.classList.toggle("show"),html.classList.toggle("stop-scroll"),screenBlur.classList.toggle("blur-screen"))}function closeMobileMenu(){mobileMenu&&(navMenu.classList.remove("show"),html.classList.remove("stop-scroll"),screenBlur.classList.remove("blur-screen"))}mobileMenu.addEventListener("click",toggleMobileMenu),navbarItems.forEach(e=>{e.addEventListener("click",closeMobileMenu)});const form=document.getElementById("contact-form"),nameField=document.getElementById("name"),emailField=document.getElementById("email"),messageField=document.getElementById("message"),messageDiv=document.getElementById("message-form");function checkFields(e){e.preventDefault();const s=nameField.value,t=emailField.value,a=messageField.value;var n=[];""===s&&n.push("Please enter a name."),s.length<3&&n.push("Name must be at least 3 characters."),/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)||n.push("Email must match this format: youremail@email.com."),(""===a||a.length<10)&&n.push("Message must be at least 10 characters long."),n.length>0?displayErrorMessage(n):displaySentMessage()}function displayErrorMessage(e){e.map(e=>{messageDiv.innerText+=e+" "}),messageDiv.classList.toggle("error"),setTimeout(()=>{messageDiv.classList.toggle("error"),clearMessages()},3e3)}function displaySentMessage(){messageDiv.innerText="Thank you! I'll reply as soon as I can.",messageDiv.classList.toggle("sent"),nameField.value="",emailField.value="",messageField.value="",setTimeout(()=>{messageDiv.classList.toggle("sent"),clearMessages()},3e3)}function clearMessages(){for(;messageDiv.firstChild;)messageDiv.removeChild(messageDiv.firstChild)}function homePageAnimation(e,s,t){var a=0;console.log(s),a=t<600?Math.floor(50*Math.random()):Math.floor(100*Math.random());function n(n){for(var l=0;l<a;){let a=Math.floor(Math.random()*t);const o=`<span class="${n}" style="top: ${Math.floor(Math.random()*s)}px; left: ${a}px; animation-duration: ${Math.floor(10*Math.random())}s;"></span>`;e.innerHTML+=o,l++}}n("dot"),n("dot-med")}form.addEventListener("submit",checkFields);