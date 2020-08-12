var Cuadrado = require('./Cuadrado');
var Rectangulo = require('./Rectangulo');
var Circunferencia = require('./Circunferencia');

const a = new Cuadrado(2);
const b = new Rectangulo(2,2);
const c = new Circunferencia(5);

console.log("Cuadrado");
console.log(a.calcularPerimetro());
console.log(a.calcularArea());
console.log("Rectangulo");
console.log(b.calcularArea());
console.log(b.calcularPerimetro());
console.log("Circunferencia");
console.log(c.calcularArea());
console.log(c.calcularPerimetro());
