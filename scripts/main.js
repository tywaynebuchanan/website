const formSubmit = document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.values);
})