const mobileMenu=document.getElementById("hamburger-menu"),navMenu=document.getElementById("nav-menu"),screenBlur=document.getElementById("screen-blur"),html=document.getElementsByTagName("html")[0],navbarItems=document.querySelectorAll(".navbar-item");function toggleMobileMenu(){mobileMenu&&(navMenu.classList.toggle("show"),html.classList.toggle("stop-scroll"),screenBlur.classList.toggle("blur-screen"))}function closeMobileMenu(){mobileMenu&&(navMenu.classList.remove("show"),html.classList.remove("stop-scroll"),screenBlur.classList.remove("blur-screen"))}function homePageAnimation(e,t,n){var o=t.substr(0,t.length-2);o=parseInt(o);var l=0;console.log(o),l=n<600?Math.floor(40*Math.random()+10):Math.floor(90*Math.random()+10);function a(t){for(var a=0;a<l;){let l=Math.floor(Math.random()*n);const s=`<span class="${t}" style="top: ${Math.floor(Math.random()*o)}px; left: ${l}px; animation-duration: ${Math.floor(10*Math.random())}s;"></span>`;e.innerHTML+=s,a++}}a("dot"),a("dot-med")}mobileMenu.addEventListener("click",toggleMobileMenu),navbarItems.forEach(e=>{e.addEventListener("click",closeMobileMenu)}),window.addEventListener("load",()=>{const e=document.getElementById("home");let t=e.clientWidth;homePageAnimation(e,document.defaultView.getComputedStyle(e,null).getPropertyValue("height"),t)});