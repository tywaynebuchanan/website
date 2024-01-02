const btn = document.querySelector(".btn-mobile-nav");
const addBtn = document.querySelectorAll(".add-outline");
const faqText = document.querySelectorAll(".faq-text")
const header = document.querySelector(".header");
btn.addEventListener('click',()=>{
    header.classList.toggle("nav-open");
})


for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", function () {
    faqText[i].classList.toggle("showAdd")
  });
}
