let btn = document.getElementById("btn");
let input = document.getElementById("unit-val").value;
let conversion1 = document.getElementById("conversion1");
let conversion2 = document.getElementById("conversion2");
let conversion3 = document.getElementById("conversion3");
const meterToFeet = (input*3.28).toFixed(2);
const feetToMeter = (input*0.304).toFixed(2);
const litreToGallon = (input*0.264).toFixed(2);
const gallonToLitre = (input*3.78).toFixed(2);
const kilosToPounds = (input*2.2046).toFixed(2);
const poundsToKilos = (input*0.45).toFixed(2); 

btn.addEventListener("click", function(){
    let convDOM1 = `${input} meters = ${(meterToFeet)} feet | ${input} feet = ${(feetToMeter)} meters`
    conversion1.innerHTML = convDOM1;

    let convDOM2 = `${input} litres = ${(litreToGallon)} gallons | ${input} gallons = ${(gallonToLitre)} litres`
    conversion2.innerHTML = convDOM2;

    let convDOM3 = `${input} kilos = ${(kilosToPounds)} pounds | ${input} pounds = ${(poundsToKilos)} kilos`
    conversion3.innerHTML = convDOM3;

});
