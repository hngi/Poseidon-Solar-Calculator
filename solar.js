const addBtn = document.querySelector('#btn');
let applianceValue = document.querySelector('#appliance_input');
let quantityValue = document.querySelector('#quantity_input');
let powerValue = document.querySelector('#power_input');
let timeValue = document.querySelector('#power_hr');
let tbody = document.querySelector(".app-list");
let result = document.querySelector("#result_num");
let email = document.querySelector("#email")
let butSend = document.querySelector(".but-send")

let daily = document.querySelector("#but-daily");
let weekly = document.querySelector("#but-week");
let monthly = document.querySelector("#but-month");

let total = 0
let total1 = 0
let total2 = 0
let total3 = 0

function click(evt) {
        
    if (applianceValue.validity.valid && quantityValue.validity.valid 
    && powerValue.validity.valid && timeValue.validity.valid) {
    
    
    let td1 = document.createElement("span");
    let td2 = document.createElement("span");
    let td3 = document.createElement("span");
    let td4 = document.createElement("span");
    let td5 = document.createElement("span");

    let div = document.createElement("div")

    td1.textContent = applianceValue.value
    td1.classList.add("space")
    td2.textContent = quantityValue.value + " qty"
    td2.classList.add("space")
    td3.textContent = powerValue.value + " Watts"
    td3.classList.add("space")
    td4.textContent = timeValue.value + ' hr'
    td4.classList.add("space")
    td5.textContent = "X"
    td5.classList.add("space")
    td5.classList.add("delete")
   

    div.appendChild(td1)
    div.appendChild(td2)
    div.appendChild(td3)
    div.appendChild(td4)
    div.appendChild(td5)

    div.classList.add("div")
        
    tbody.append(div)

    applianceValue.value = ""
    quantityValue.value = ""
    powerValue.value = ""
    timeValue.value = ""

    value("daily")

    }


}


const value = (data) => {
    let allValue = document.querySelectorAll(".div")
    let list = Array.from(allValue)
  
    total = 0

    for (let i = 0; i < list.length; i++){
       
        let sum = list[i].children[1].textContent;
        let sum2 = list[i].children[2].textContent;
        let sum3 = list[i].children[3].textContent;
        console.log(sum3)

        let sumvalue = sum.split(" ")[0];
        let sumvalue2 = sum2.split(" ")[0];
        let sumvalue3 = sum3.split(" ")[0];
        
        if (data === "daily"){
            let num = sumvalue * sumvalue2 * sumvalue3
            total += num
        }

        if (data === "weekly"){
            let num = sumvalue * sumvalue2 * sumvalue3 * 7
            console.log(sumvalue,sumvalue2)
            total += num
        }

        if (data === "monthly") {
            let num = sumvalue * sumvalue2 * sumvalue3 * 28
            total += num
        }
    
    }

    if (data === "weekly"){
        document.querySelector(".but-active").classList.remove("but-active")
        weekly.classList.add("but-active")
    }

    if (data === "monthly"){
        document.querySelector(".but-active").classList.remove("but-active")
        monthly.classList.add("but-active")
    }

    if (data === "daily"){
        document.querySelector(".but-active").classList.remove("but-active")
        daily.classList.add("but-active")
    }
    
    result.textContent = total
}


const deleteValue = (evt) => {
    console.log(evt.target)
    if (evt.target.className === "space delete"){
        console.log("yes")
        const vv = evt.target.parentNode
        tbody.removeChild(vv)
        value("daily")
    }
    
}
    

const sendMail = () => {
    let allValue = document.querySelectorAll(".div")
    let list = Array.from(allValue)

    total1 = 0
    total2 = 0
    total3 = 0

    for (let i = 0; i < list.length; i++){
       
        let sum = list[i].children[1].textContent;
        let sum2 = list[i].children[2].textContent;
        let sum3 = list[i].children[3].textContent;
    

        let sumvalue = sum.split(" ")[0];
        let sumvalue2 = sum2.split(" ")[0];
        let sumvalue3 = sum3.split(" ")[0];
        
        let num1 = sumvalue * sumvalue2 * sumvalue3
        total1 += num1
       
        let num2 = sumvalue * sumvalue2 * 7
        total2 += num2
       
        let num3 = sumvalue * sumvalue2 * 28
        total3 += num3

   
    }

    

const data = `The Daily Solar Consumption for your appliances is ${total1} watt`
const data1 = `The Weekly Solar Consumption for your appliances is ${total2} watt`
const data2 = `The Monthly Solar Consumption  for your appliances is ${total3} watt`
                 
    
var templateParams = {
    message1: data,
    message2: data1,
    message3: data2,
    email: email.value
};
 
emailjs.send('gmail', 'contact_form', templateParams, "user_uINuNBjAvZ4Re6NBn6W7K")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Results Sent Successfully")
    }, function(error) {
       console.log('FAILED...', error);
    });

email.value = ""
tbody.innerHTML = ""
result.textContent = 0



}




addBtn.addEventListener('click', click);
daily.addEventListener('click', () => ( value("daily") ))
weekly.addEventListener('click', () => ( value("weekly") ))
monthly.addEventListener('click', () => ( value("monthly") ))
tbody.addEventListener('click', deleteValue)
butSend.addEventListener("click", sendMail)

  



