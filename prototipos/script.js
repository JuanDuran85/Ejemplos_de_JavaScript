let animal = Object.create(null);

animal.vivo = true;

animal.estaVivo = function () {
    if (animal.vivo){
        console.log("El animal esta vivo");
    }
}

//herencia de prototipos, la cual funciona por delegacion. 
let perro = Object.create(animal);

perro.estaVivo();

// -----------------------------------------------

function User() {};

User.prototype.saludar = function(){
    console.log("Saludos desde la funcion User...");
}

function Administrador(){};

Administrador.prototype = new User();

let admin1 = new Administrador();
admin1.saludar();

//--------------------------------------------------------------------------------

function Poligono(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
}

function Rectangulo(alto,ancho){
    Poligono.call(this, alto, ancho);
}

Rectangulo.prototype = Object.create(Poligono.prototype); // a
Rectangulo.prototype.constructor = Rectangulo; // b
/* En la línea A anterior, creamos un objeto para Rectangulo.prototype y lo vinculamos a Poligono.prototype. Al hacer esto, efectivamente hacemos que Rectangulo herede de Poligono. Y finalmente, en la línea B, anulamos el constructor para que apunte a la función del Rectangulo; de lo contrario, usaría la propiedad del constructor en Poligono. */


Rectangulo.prototype.calcularArea = function(){
    return this.alto * this.ancho;
}

var rec1 = new Rectangulo(3,4);
console.log(rec1);
console.log(rec1.calcularArea());
  
// ---------------------------------------------------------------

// constructor
function Product(name, year, price) {
    this.name = name;
    this.year = year;
    this.price = price;
}
 
// método
Product.prototype.generateBarcode = function() {
  console.log('Método generateBarcode');
}
 
// constructor
function Smartphone(name, year, price, os) {
    Product.call(this, name, year, price);
    this.os = os;
}
 
// herencia
Smartphone.prototype = Object.create(Product.prototype);
Smartphone.prototype.constructor = Smartphone;
 
 
// instancia clase
var iphone = new Smartphone('iPhone', 2018, 999, 'iOS');
 
// llamada método
console.log(iphone.name); // iPhone
console.log(iphone.os); // iOS
iphone.generateBarcode(); // Método generateBarcode
