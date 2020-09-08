import Clientes from './clientes.js';
import Impuestos from './impuestos.js';

let resultado = document.getElementById('resultado');

let calculando = (event) => {
    resultado.innerHTML = '';
    event.preventDefault();
    let montoAnual = document.getElementById('montoAnual').value;
    let deducciones = document.getElementById('deducciones').value;
    let impuesto1 = new Impuestos(parseFloat(montoAnual), parseFloat(deducciones));
    let cliente1 = new Clientes('Juan', impuesto1);
    resultado.innerHTML = cliente1.calcularImpuesto();
};

let formulario = document.querySelector('form');
formulario.addEventListener('submit', calculando);

