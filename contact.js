let form =  document.querySelector(".contact_form");
let msg = document.querySelector(".msg");
let title = document.querySelector("#title");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#textarea");
let submit = document.querySelector('#btn_submit')

    
// form.title.addEventListener('input', (e) =>{
title.addEventListener('input', (e) =>{
    msg.textContent = "";
    const validator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (!validator.test(form.title.value)) {
        msg.textContent = "Please, enter valid title";
        msg.style.color = "red";
        return false;
    }     
})

// form.name.addEventListener('input', (e) =>{
name.addEventListener('input', (e) =>{

    msg.textContent = "";
    const validator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (!validator.test(form.name.value)) {
        msg.textContent = "Please, enter valid name & not numbers numbers";
        msg.style.color = "red";
        return false;
    } 

})

email.addEventListener('input', (e) =>{
    msg.textContent = "";
    const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validator.test(form.email.value)) {
        msg.textContent = "Please, enter valid email address";
        msg.style.color = "red";
        return false;
    } 
})

message.addEventListener('input', (e) =>{
    msg.textContent = "";
})

const sendMail = () => {
    
const data = `Hello ${title + ' ' + name}.`
const data1 = `Thank you for contacting us.`
const data2 = `Please note that one of our agents will contact you shortly`
                 
    
var templateParams = {
    message1: data,
    message2: data1,
    message3: data2,
    email: email.value
};
 
emailjs.send('gmail', 'contact_form', templateParams, "user_uINuNBjAvZ4Re6NBn6W7K")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

email.value = ""
tbody.innerHTML = ""
result.textContent = 0
}


submit.addEventListener('click', (e)=>{
    e.preventDefault()
    
    if(form.name.value === "" || form.textarea === "" || form.email === ""){
       msg.textContent = "Please, fill all required fields";
       msg.style.color = "red";
        return false;
    }
    

    if(form.name.value.length < 4){
      msg.textContent = "Name must be more than 4 characters";
      msg.style.color = "red";
        return false;
    }

    if(form.textarea.value.length < 20){
       msg.textContent = "Message cannot be less than 20 characters";
       msg.style.color = "red";
        return false;
    }
    
    
    form.title.value = "";
    form.email.value = "";
    form.name.value = "";
    form.message.value = "";
    
    msg.textContent = "Thank you for your message. We will reach you shortly";
    alert("Thanks for your message. We will reach you shortly");
    msg.textContent = "";

    sendMail();

})