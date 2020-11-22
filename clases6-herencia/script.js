class Vehiculo{
    constructor(marca, color, matricula) {
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }
 }
 
 class Coche extends Vehiculo{
    constructor(marca,color,matricula){
       super(marca,color,matricula);
    }
 }
 
 class Moto extends Vehiculo{
    constructor(marca,color,matricula){
       super(marca,color,matricula);
    }
 }
 
 class Bus extends Vehiculo{
    constructor(marca,color,matricula){
       super(marca,color,matricula);
    }
 }

 let coche1 = new Coche('Toyota','Negro', '123ABC');
 let moto1 = new Moto('Honda','Rojo', '456CDF');
 let bus1 = new Bus('Fuso','Blanco', '678EDC');

 console.log(coche1);
 console.log(moto1);
 console.log(bus1);
 console.log(coche1.marca);
 console.log(moto1.color);
 console.log(bus1.matricula);

 //--------------------------------------------------------------------------------
console.log("--------------------------------------------------------------------");

 class Personal{
    constructor(nombre, departamento, tipo, activo) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.tipo = tipo;
        this.activo = activo;
    }
}

class Administrativo extends Personal {
    constructor(nombre, departamento, tipo, activo){
       super(nombre, departamento, tipo, activo);
    }
}

class Docente extends Personal {
    constructor(nombre, departamento, tipo, activo){
       super(nombre, departamento, tipo, activo);
    }
}
 
class Obrero extends Personal {
}

let admin1 = new Administrativo('Jocelyn','Contenido', 'Fijo', true);
let docente1 = new Docente('Juan','FrontEnd', 'Contratado', true);
let obrero1 = new Obrero('Manuel','Electricidad','Fijo',true);
console.log(admin1);
console.log(docente1);
console.log(obrero1);

//--------------------------------------------------------------------------------

class Poligono {
   constructor(alto,ancho){
      this.alto = alto;
      this.ancho = ancho;
   }
}

class Rectangulo extends Poligono {
   constructor(alto,ancho){
      super(alto,ancho);
   }   
   calcularArea(){
      return this.alto * this.ancho;
   }
}

var rec1 = new Rectangulo(3,4);
console.log(rec1);
console.log(rec1.calcularArea());

// ------------------------------------------------------------------------

class Producto {
   constructor(nombre, precio, sku){
      this.nombre = nombre;
      this.precio  = precio;
      this.sku  = sku;
   }
   generarCodigo(){
    console.log(this.nombre+this.precio+this.sku);
   }
}
  
class Movil extends Producto{
   constructor(nombre, precio, sku, sistemaOperativo) {
      super(nombre, precio, sku);
      this.sistemaOperativo = sistemaOperativo;
   }

   instalarApp(){
      console.log("Instalando APP");
   }
}

var telefono1 = new Movil('Samsung', 220000, 'GK234', 'Android');

console.log(telefono1.nombre);
console.log(telefono1.sku);
console.log(telefono1.precio);
console.log(telefono1.sistemaOperativo);
telefono1.generarCodigo();
telefono1.instalarApp();

//-----------------------------------------------------------------------

function Comuna(nombre,poblacion){
   this.nombre = nombre;
   this.poblacion  = poblacion;
 };
 
 Comuna.prototype.calcularCenso = function() {
   console.log('Calculando el censo del sector...');
 };

 function Sector(nombre,poblacion,direccion) {
   Comuna.call(this, nombre,poblacion);
   this.direccion = direccion;
};

Sector.prototype = Object.create(Comuna.prototype);
Sector.prototype.constructor = Sector;

// instancia del objeto
var centro = new Sector('Santiago', 3000000, 'Rebeca Matte 18');
// llamada a método y propiedades
console.log(centro.nombre);
console.log(centro.poblacion);
console.log(centro.direccion);
centro.calcularCenso();

//--------------------------------------------------------------------------------

class Comuna{
   constructor(nombre, poblacion){
      this.nombre = nombre;
      this.poblacion  = poblacion;
   }
   calcularCenso(){
    console.log('Calculando el censo del sector...');
   }
}

class Sector extends Comuna{
   constructor(nombre, poblacion, direccion) {
      super(nombre, poblacion);
      this.direccion = direccion;
   }
}

var centro = new Sector('Santiago', 3000000, 'Rebeca Matte 18');
console.log(centro.nombre);
console.log(centro.poblacion);
console.log(centro.direccion);
centro.calcularCenso();