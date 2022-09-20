const header = document.querySelector("header");

window.addEventListener("scrollY", function(){
    header.classList.toggle("sticky",window.scrollY>0);
});