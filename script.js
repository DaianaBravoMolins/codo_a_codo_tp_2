//Calculo:
//cantidad de tickets * 200 * porcentaje de descuento de acuerdo a la categoria correspondiente

let resumen = document.querySelector("#button3")


resumen.addEventListener("click",
function mostrarCalculo(){
    let cantidad1 = document.querySelector("#cantidadd").value
    let categoria = document.querySelector("#inputState").value
    let totalapagar = document.querySelector("#button") 
    totalapagar.textContent = "Total a pagar:$"+ cantidad1*200*categoria

})
