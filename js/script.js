"use strict";
const addBtn = document.querySelector('.add_form button[type=\'submit\']');
let applianceValue = document.getElementById('appliance_input');
let quantityValue = document.getElementById('quantity_input');
let powerValue = document.getElementById('power_input');

const handleAddSubmit = ev => {
    ev.preventDefault();
        let newRow = document.createElement('tr');
        let newAppliance = document.createElement('td');
        let newQuantity = document.createElement('td');
        let newPower = document.createElement('td');
        newAppliance.innerHTML += applianceValue.value;
        newQuantity.innerHTML += quantityValue.value+ " qty";
        newPower.innerHTML += powerValue.value+ " watts";
        newRow.appendChild(newAppliance);
        newRow.appendChild(newQuantity);
        newRow.appendChild(newPower);
        document.querySelector('tbody').appendChild(newRow);
        
        document.getElementById("calc_form").reset();

}

addBtn.addEventListener('click', handleAddSubmit);
