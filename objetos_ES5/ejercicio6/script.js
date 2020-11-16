/*  
11) Modifica el siguiente código utilizando prototipos para evitar tener que definir múltiples veces la misma función. 

function Rectangulo(ancho, alto) { // Función constructora
  this.ancho = ancho; // Asignamos ancho inicial
  this.alto = alto; // Asignamos alto inicial
 }
 
 r1 = new Rectangulo(3, 5); // Creamos una instancia
 
 r1.calcularArea = function() { // Agregamos el método
  return this.ancho * this.alto;
 }

 r2 = new Rectangulo(4, 8); // Creamos una instancia

 r2.calcularArea = function() {
  return this.ancho * this.alto;
 } 

 // La suma del área de los rectángulos es:

 console.log(r1.calcularArea() + r2.calcularArea()) 
*/

function Rectangulo(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
}

Rectangulo.prototype.calcularArea = function () {  
    return this.ancho * this.alto;
}

r1 = new Rectangulo(3, 5);
r2 = new Rectangulo(4, 8);

console.log(r1.calcularArea() + r2.calcularArea());

/*  
12) Partiendo del ejercicio anterior, agrega un nuevo método denominado “calcularPerimetro” utilizando “prototype”, luego muestra en pantalla la suma de ambos perímetros (rectángulo r1 y r2) como un solo resultado. Tips: Perímetro de un rectángulo: 2*(ancho+alto).
*/

function Rectangulo(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
}

Rectangulo.prototype.calcularArea = function () {  
    return this.ancho * this.alto;
}

Rectangulo.prototype.calcularPerimetro = function () {  
    return 2*(this.ancho + this.alto);
}

r1 = new Rectangulo(3, 5);
r2 = new Rectangulo(4, 8);

console.log(r1.calcularArea() + r2.calcularArea());
console.log(r1.calcularPerimetro() + r2.calcularPerimetro());

// ------------------------------------------------------------------------------------

function FiguraGeometrica(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
};

function Cuadrado(lado){
    FiguraGeometrica.call(this, lado, lado);
};
Cuadrado.prototype = Object.create(FiguraGeometrica.prototype);

Cuadrado.prototype.calcularArea = function () {  
    return this.ancho * this.alto;
};

var cuadrado1 = new Cuadrado(3);
console.log(cuadrado1);
console.log(cuadrado1 .calcularArea());
