import calculadora from './calculadora.js';

let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

calcular.addEventListener('click',()=>{
    let opera = document.getElementById('opera').value;
    let a = document.getElementById('a').value;
    if (opera == 'raiz' || opera == 'cuadrado' || opera == 'absoluto' && a){
        resultado.innerHTML = calculadora[opera](parseInt(a));
    }else {
        alert("Ingrese una operacion (raiz, cuadrado, absoluto) y un valor en la casilla")
    }
});