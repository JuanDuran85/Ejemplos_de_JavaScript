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
function Producto(nombre, precio, sku){
    this.nombre = nombre;
    this.precio  = precio;
    this.sku  = sku;
}
   
// método
Producto.prototype.generarCodigo = function() {
  console.log(this.nombre+this.precio+this.sku);
}
 
// constructor
function Movil(nombre, precio, sku, sitemaOperativo) {
    Producto.call(this, nombre, precio, sku);
    this.sitemaOperativo = sitemaOperativo;
}

// herencia
Movil.prototype = Object.create(Producto.prototype);
Movil.prototype.constructor = Movil;

// instancia clase
var telefono1 = new Movil('Samsung', 220000, 'GK234', 'Android');
 
// llamada método
console.log(telefono1.nombre);
console.log(telefono1.sku);
console.log(telefono1.precio);
console.log(telefono1.sitemaOperativo);
telefono1.generarCodigo();
