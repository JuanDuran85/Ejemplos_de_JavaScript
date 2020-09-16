class Rectangulo {
    constructor(x, y) {
        let _x = x;
        this._getX = () => _x;
        this._setX = (x) => _x = x;
        this.y = y
    }
 
    calcularArea() {
        return this._getX() * this.y;
    }
 
    calcularPerimetro() {
        return (this._getX() + this.y) * 2;
    }

    get _x(){
        console.log("entro en el get");
        return this._getX();
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
 
 let rectangulo1 = Object.freeze(new Rectangulo(3,4));
 console.log(rectangulo1.calcularArea());
 console.log(rectangulo1._x);
 rectangulo1._x = 20;
 console.log(rectangulo1._x);
 console.log(rectangulo1);
 rectangulo1._setX(20)
 console.log(rectangulo1.calcularPerimetro());
 let circulo1 = new Circulo(3);
 console.log(circulo1.calcularArea());
 console.log(circulo1.calcularPerimetro());
 console.log(rectangulo1._x);
 rectangulo1.x = 770;
 console.log(rectangulo1._x);
 console.log(rectangulo1);