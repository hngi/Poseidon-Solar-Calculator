let form =  document.querySelector(".contact_form");
let msg = document.querySelector(".msg");
let title = document.querySelector("#title");
let name = document.querySelector("#name");
let email1 = document.querySelector("#email1");
let message = document.querySelector("#textarea");
let submit = document.querySelector('#btn_submit')


const sendMail2 = () => {

if (title.validity.valid && name.validity.valid && email1.validity.valid && message.validity.valid) {
    

const data1 = `Thank you for contacting us.`
const data2 = `Please note that one of our agents will contact you shortly`
                 
    
var templateParams = {
    title: title.value,
    name: name.value,
    message2: data1,
    message3: data2,
    email: email1.value,
};

var tem = {
    message: message.value
}
 
emailjs.send('gmail', 'template_ov5pgnWe', templateParams, "user_uINuNBjAvZ4Re6NBn6W7K")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Message Sent")
    }, function(error) {
       console.log('FAILED...', error);
    });

emailjs.send('gmail', 'poseidon', tem, "user_WxqJsuLSdtXZl5554OvYz")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });



title.value = ""
name.value = ""
email1.value = ""
message.value = ""

    }

}


submit.addEventListener("click", sendMail2)
   
    
// msg.textContent = "Thank you for your message. We will reach you shortly";
    
   

   

