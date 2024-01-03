const btn = document.querySelector(".btn-mobile-nav");
const addBtn = document.querySelectorAll(".add-outline");
const faqText = document.querySelectorAll(".faq-text")
const response = document.getElementById("message")
const header = document.querySelector(".header");
const form = document.getElementById("form")
const subscribeMessage = document.getElementById("response")
const subscribeForm = document.getElementById("subscribe-form")
btn.addEventListener('click',()=>{
    header.classList.toggle("nav-open");
})


for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", function () {
    faqText[i].classList.toggle("showAdd")
  });
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  let fullname = document.getElementById("fullname")
  let email = document.getElementById("email")
  let phone = document.getElementById("phonenumber")
  let services = document.getElementById("services")
  let message = document.getElementById("message")

  if(fullname.value == "" || email.value == "" || phone.value == "" || services.value == "" || message == "")
  {
    response.innerHTML = "All fields are required"
  }else{
    fullname.value = ""
    email.value = ""
    phone.value = ""
    services.value = ""
    message.value = ""
    response.innerHTML = "The form was submitted"
  }

})

subscribeForm.addEventListener("submit",(e)=>{
  e.preventDefault()

  let email = document.getElementById("subscribe-email")

  if(email.value == "")
    {
      subscribeMessage.innerHTML = "The email is required"
    }else{
      email.value = ""
      subscribeMessage.innerHTML = "You have been subscribed to our news letter"
    }
})
