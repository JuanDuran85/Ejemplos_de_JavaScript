// getters : acceder a los valores (get) "_" se usa para diferenciar las variables
// setters: para poder modificarlos (set)

function Cuadrado(lado) {
    this._lado = function () {
        return lado;
    };
}

Cuadrado.prototype.getLado = function () {
    return this._lado();
}

Cuadrado.prototype.setLado = function (nuve_lado){
    this._lado = function () {
        return nuve_lado;
    };
}

//creando metodos para la clase
Cuadrado.prototype.calcularArea = function () {  
    return Math.pow(this.lado,2);
}

// instancia (instanciar) objetos
var c1 = new Cuadrado(5);
var c2 = new Cuadrado(7);

console.log(c1);
console.log(c1.getLado());
c1.setLado(7);
console.log(c1.getLado());
c1.lado = 20;
console.log(c1.getLado());
console.log(c1.calcularArea());