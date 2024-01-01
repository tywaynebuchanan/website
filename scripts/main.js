const btn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btn.addEventListener('click',()=>{
    header.classList.toggle("nav-open");
})