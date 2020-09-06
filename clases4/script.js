/*  
7) Partiendo del ejercicio realizado anteriormente paso a paso, agrega una nueva clase que calcule el área y el perímetro de un triángulo rectángulo.
*/

class Rectangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
    calcularArea() {
        return this.x * this.y;
    }
    calcularPerimetro() {
        return (this.x + this.y) * 2;
    }
}

class Circulo {
    constructor(r) {
        this.r = r;
    }
    calcularArea() {
        return this.r * this.r * Math.PI;
    }
    calcularPerimetro() {
        return this.r * Math.PI * 2;
    }
}

class Triangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
 
    calcularArea() {
        return (this.x * this.y)/2;
    }
 
    calcularPerimetro() {
        let z = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
        return (this.x + this.y + z);
    }
}

let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

let circulo1 = new Circulo(3);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());

let triangulo1 = new Triangulo(3,4);
console.log(triangulo1.calcularArea());
console.log(triangulo1.calcularPerimetro());