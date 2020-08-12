const Poligono = require('./Poligono');

const Rectangulo = module.exports = function (x, y) {
    this.x = x;
    this.y = y;
}

Rectangulo.prototype = Object.create(Poligono);

Rectangulo.prototype.calcularPerimetro = function () {
    return 2 * (this.x + this.y);
}

Rectangulo.prototype.calcularArea = function () {
    return this.x * this.y;
}