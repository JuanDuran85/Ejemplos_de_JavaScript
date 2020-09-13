class APoligono {
    calcularArea() {
        throw 'Error: no implementado. Poligono describe una interfaz. no debe ser construido directamente';
    }
    calcularPerimetro() {
        throw 'Error: no implementado. Poligono describe una interfaz. no debe ser construido directamente';
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

    get y() {
        return this._y;
    }

    set x(nueva_x) {
        this._x = nueva_x;
    }

    set y(nueva_y) {
        this._y = nueva_y;
    }
 
    calcularArea() {
        return this._x * this._y;
    }
 
    calcularPerimetro() {
        return (this._x + this._y) * 2;
    }
}

class Triangulo extends APoligono {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y
    }
 
    calcularArea() {
        return (this.x * this.y)/2;
    }
 
    calcularPerimetro() {
        let z = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
        return (this.x + this.y + z);
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
 
class Circulo extends APoligono {
    constructor(r) {
        super();
        this.r = r;
    }
 
    calcularArea() {
        return this.r * this.r * Math.PI;
    }
 
    calcularPerimetro() {
        return this.r * Math.PI * 2;
    }
}
 
let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

let cuadrado1 = new Cuadrado(3);
console.log(cuadrado1.calcularArea());
console.log(cuadrado1.calcularPerimetro());

let circulo1 = new Circulo(3);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro()); 
 
let triangulo1 = new Triangulo(3,4);
console.log(triangulo1.calcularArea());
console.log(triangulo1.calcularPerimetro()); 

let paralelogramo = new Paralelogramo(3,4);
console.log(paralelogramo.calcularArea());
console.log(paralelogramo.calcularPerimetro()); 