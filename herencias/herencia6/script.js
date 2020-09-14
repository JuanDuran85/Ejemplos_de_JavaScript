class APoligono {
    calcularArea() {
        throw 'Error: no implementado. El Polígono describe una interfaz. no debe ser construido directamente';
    }
    calcularPerimetro() {
        throw 'Error: no implementado. El Polígono describe una interfaz. no debe ser construido directamente';
    }
}
 
class Rectangulo extends APoligono {
    constructor(x, y) {
           super();
           this._x = x;
           this._y = y
    }

    get x() {
           return this._x;
    }

    set x(nueva_x) {
           this._x = nueva_x;
    }
 
    calcularArea() {
           return this._x * this._y;
    }
 
    calcularPerimetro() {
           return (this._x + this._y) * 2;
    }
}
 
class Cuadrado extends Rectangulo {
    constructor(x) {
        super(x, x);
    }
}

class Paralelogramo extends Rectangulo {
    constructor(x,y) {
        super(x, y);
    }
}
  
let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

let cuadrado1 = new Cuadrado(3);
console.log(cuadrado1.calcularArea());
console.log(cuadrado1.calcularPerimetro());

let paralelogramo = new Paralelogramo(3,4);
console.log(paralelogramo.calcularArea());
console.log(paralelogramo.calcularPerimetro());
