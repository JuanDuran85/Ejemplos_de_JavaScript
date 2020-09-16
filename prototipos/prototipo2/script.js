// ES5
//clase Cuadrado
//atributos: lado
//metodos: calcular un area, calcular un perimetro

// funcion constructora, crear una clase y asignamos atributos

//creando clase con atributos
function Cuadrado(lado) {
    this.lado = lado;
}

//creando metodos para la clase
Cuadrado.prototype.calcularArea = function () {  
    return Math.pow(this.lado,2);
}

// instancia (instanciar) objetos
var c1 = new Cuadrado(5);
var c2 = new Cuadrado(7);

console.log(c1);
console.log(c1.calcularArea());
c1.lado = 20; // mala practica... no se hace.
console.log(c1);
console.log(c1.calcularArea());
console.log(c2);
console.log(c2.calcularArea());