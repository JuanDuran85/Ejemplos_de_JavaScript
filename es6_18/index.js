import Circunferencia from './circunferencia.js';

let calcular = document.getElementById('calcular');

calcular.addEventListener('click',calcularArea);

function calcularArea() {
    event.preventDefault();
    let radio = parseInt(document.getElementById('radio').value);
    let resultado1 = document.getElementById('resultado1');
    let resultado2 = document.getElementById('resultado2');

     if (radio && radio > 0) {
        let areaCirculo = new Circunferencia(radio);   
        resultado1.innerHTML = areaCirculo.area();
        resultado2.innerHTML = areaCirculo.perimetro();
     }else {
        resultado1.innerHTML = `Debe ingresar un numero... `;
        resultado2.innerHTML = ` y este debe ser mayor que cero`;
     };
};
