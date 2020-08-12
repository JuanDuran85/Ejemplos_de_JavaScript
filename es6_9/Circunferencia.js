const Poligono = require('./Poligono');

const Circunferencia = module.exports = function Circunferencia (radio) {
    this.getRadio = () => radio;
};

Circunferencia.prototype = Object.create(Poligono);

Circunferencia.prototype.calcularPerimetro = function () {
    return this.getRadio() * 2 * Math.PI;
};

Circunferencia.prototype.calcularArea = function () {
    return this.getRadio() * this.getRadio() * Math.PI;
};  