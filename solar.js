const addBtn = document.querySelector('#btn');
let applianceValue = document.querySelector('#appliance_input');
let quantityValue = document.querySelector('#quantity_input');
let powerValue = document.querySelector('#power_input');
let timeValue = document.querySelector('#power_hr')
let tbody = document.querySelector("#tbody")
let result = document.querySelector("#result_num")

let daily = document.querySelector("#but-daily")
let weekly = document.querySelector("#but-week")
let monthly = document.querySelector("#but-month")

let total = 0


function click(evt) {
    evt.preventDefault()
   
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.textContent = applianceValue.value
    td2.textContent = quantityValue.value + " qty"
    td3.textContent = powerValue.value + " Watts"
    td4.textContent = timeValue.value + ' hr'
    td5.textContent = "X"
    td5.classList = "delete"

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    tbody.appendChild(tr)
    applianceValue.value = ""
    quantityValue.value = ""
    powerValue.value = ""
    timeValue.value = ""

    value("daily")

}

const value = (data) => {
    let allValue = document.querySelectorAll("tr")
    let list = Array.from(allValue)
    console.log(list)
    total = 0

    for (let i = 0; i < list.length; i++){
        console.log(list[i].children[1])

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
            console.log(total)
        }

        if (data === "weekly"){
            let num = sumvalue * sumvalue2 * 7
            total += num
        }

        if (data === "monthly") {
            let num = sumvalue * sumvalue2 * 28
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
    const vv = evt.target.parentNode
    tbody.removeChild(vv)
    value()
}


addBtn.addEventListener('click', click);
daily.addEventListener('click', () => ( value("daily") ))
weekly.addEventListener('click', () => ( value("weekly") ))
monthly.addEventListener('click', () => ( value("monthly") ))
tbody.addEventListener('click', deleteValue)

console.log(addBtn)

