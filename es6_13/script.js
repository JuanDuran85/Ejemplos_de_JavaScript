let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

calcular.addEventListener('click',calculadora);

function calculadora(event) {
    event.preventDefault();
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let operador = document.getElementById("operador").value;
    if (num1 && num2){
        if (operador == "sumar") {
            resultado.innerHTML = ` ${operador} es igual a ${operacion(num1,num2,sumar)}`;
        } else if (operador == "multiplicar") {
            resultado.innerHTML = ` ${operador} es igual a ${operacion(num1,num2,multiplicar)}`;
        } else if (operador == "dividir") {
            resultado.innerHTML = ` ${operador} es igual a ${operacion(num1,num2,dividir)}`;
        } else {
            resultado.innerHTML = ` ${operador} es igual a ${operacion(num1,num2,restar)}`;
        }
    }else {
        alert("Ingrese un valor numérico en ambas casillas")
    }
};

function operacion(num1,num2,opera) {
    return opera(num1,num2);
}

function restar(num1,num2){
    return num1-num2;
}

function sumar(num1,num2){
    return num1+num2;
}

function dividir(num1,num2){
    return num1/num2;
}

function multiplicar(num1,num2){
    return num1*num2;
}
