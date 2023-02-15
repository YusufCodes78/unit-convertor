let btn = document.getElementById("btn");
let input = document.getElementById("unit-val");
let conversion1 = document.getElementById("conversion1");
let conversion2 = document.getElementById("conversion2");
let conversion3 = document.getElementById("conversion3");
 

btn.addEventListener("click", function(){
    let convDOM1 = `${input.value} meters = ${(input.value*3.28).toFixed(2)} feet | ${input.value} feet = ${(input.value*0.304).toFixed(2)} meters`
    conversion1.innerHTML = convDOM1;

    let convDOM2 = `${input.value} litres = ${(input.value*0.264).toFixed(2)} gallons | ${input.value} gallons = ${(input.value*3.78).toFixed(2)} litres`
    conversion2.innerHTML = convDOM2;

    let convDOM3 = `${input.value} kilos = ${(input.value*2.2046).toFixed(2)} pounds | ${input.value} pounds = ${(input.value*0.45).toFixed(2)} kilos`
    conversion3.innerHTML = convDOM3;

});
