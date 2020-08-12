//const Poligono = require('./Poligono');

/* const Cuadrado = module.exports = function Cuadrado () {
}; */

const Cuadrado = {}
//Cuadrado.prototype = new Poligono();

Cuadrado.calcularPerimetro = function (x) {
    return x * 4;
};

Cuadrado.calcularArea = function (x) {
    return x * x;
};