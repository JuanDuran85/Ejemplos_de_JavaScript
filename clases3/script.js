/*  
5) Utiliza la sintaxis de clases (class) de ES6 para reescribir el siguiente código:

function Carta(numero, pinta){
  this.numero = numero;
  this.pinta = pinta;
}

var corazones = new Carta(10,'Corazones');
*/

class Carta {
    constructor(numero, pinta){
        this.numero = numero;
        this.pinta = pinta;
    }
}

var corazones = new Carta(10,'Corazones');
console.log(corazones);

//--------------------------------------------------------------------------

/*  
6) Utiliza la sintaxis de clases (class) de ES6 para reescribir el siguiente código:

function Usuario(nombre, rut) {  
   this.nombre = nombre;
   this.rut = rut; 
}

Usuario.prototype.saludar = function(){
  console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
}

var u1 = new Usuario('Jocelyn','17.123.456-7');
u1.saludar();
*/

class Usuario {
  constructor(nombre, rut){
    this.nombre = nombre;
    this.rut = rut; 
  }  

  saludar(){
    console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
  }
}

var u1 = new Usuario('Jocelyn','17.123.456-7');
u1.saludar();