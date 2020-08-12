import Rectangulo from './rectangulo.js';
import Triangulo from './triangulo.js';

let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

calcular.addEventListener('click',figuraGeometrica);

function figuraGeometrica(event) {  
    event.preventDefault();

    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    if (parseInt(base) && parseInt(altura)){
        let rectangulo = new Rectangulo(parseInt(base), parseInt(altura));
        let triangulo = new Triangulo(parseInt(base), parseInt(altura));
        resultado.innerHTML = `Área para un Triángulo: ${triangulo.calcularArea()}, Perímetro para un Triángulo: ${triangulo.calcularPerimetro()}. Área para un Rectángulo: ${rectangulo.calcularArea()}, Perímetro para un Rectángulo: ${rectangulo.calcularPerimetro()}.`;
    }else {
        alert("Ingrese un valor numérico en ambas casillas")
    }
};