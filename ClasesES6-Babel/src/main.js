import Clientes from './clientes.js';
import Impuestos from './impuestos.js';

let impuesto1 = new Impuestos(10, 2);
let cliente1 = new Clientes('Juan', impuesto1);
console.log(cliente1.calcularImpuesto());