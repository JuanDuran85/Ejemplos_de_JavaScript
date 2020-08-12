const Poligono = require('./Poligono');

const Cuadrado = module.exports = function Cuadrado (x) {
    this.getX = () => x;
    //this.lado = lado;
};

Cuadrado.prototype = Object.create(Poligono);

Cuadrado.prototype.calcularPerimetro = function () {
    return this.getX() * 4;
    //return this.lado * 4;
};

Cuadrado.prototype.calcularArea = function () {
    return this.getX() * this.getX();
    //return this.lado * this.lado;
};  