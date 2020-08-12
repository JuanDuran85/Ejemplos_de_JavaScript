var Cuadrado = require('./Cuadrado');
var Rectangulo = require('./Rectangulo');
//var Poligono = require('./Poligono');

const a = new Cuadrado(2);
const b = new Rectangulo(2,2);

console.log("Cuadrado");
console.log(a.calcularPerimetro());
console.log(a.calcularArea());
console.log("Rectangulo");
console.log(b.calcularArea());
console.log(b.calcularPerimetro());
console.log("Poligono");
//console.log(Poligono.calcularArea());
//console.log(Poligono.calcularPerimetro());

console.log("Implementando instanceof");
console.log('type of `a` === ' + typeof a);
console.log('type of `b` === ' + typeof b);
console.log('type of `Cuadrado` === ' + typeof Cuadrado);
console.log('`a` instanceof `Cuadrado` === ' + (a instanceof Cuadrado));
console.log('`b` instanceof `Cuadrado` === ' + (b instanceof Cuadrado));
console.log('`b` instanceof `Rectángulo` === ' + (b instanceof Rectangulo));
