const Triangulo = function (base,altura){
    this.base = base;
    this.altura = altura;
};

/* const nuevoTriangulo = function (base,altura) {    
    this.base = base;
    this.altura = altura;
} */

Triangulo.prototype.calculoArea = function(){
    console.log(this)
    return (this.base*this.altura)/2;
};

const triangulo1 = new Triangulo(2,5);
console.log(triangulo1.calculoArea());

/* nuevoTriangulo.prototype = Object.create(Triangulo.prototype);
const triangulo2 = new nuevoTriangulo(2,6)
console.log(triangulo2.calculoArea()); */

let nuevoTriangulo = Object.create(Triangulo.prototype);
Triangulo.apply(nuevoTriangulo, arguments);
nuevoTriangulo.calculoArea = Triangulo.prototype.calculoArea.bind(nuevoTriangulo);

console.log(nuevoTriangulo.calculoArea());