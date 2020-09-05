/* 
9) Reescribe el siguiente código utilizando una función constructora. 

var persona = new Object();
persona.nombre = "Camila";
persona.saludar = function(){
      console.log("Hola soy " + nombre);
}
persona.saludar();

*/

var persona = new Object();
persona.nombre = "Camila";
persona.saludar = function(){
      console.log("Hola soy " + this.nombre);
}
persona.saludar();


function Persona (nombre) {
    this.nombre = "Camila";
}

var persona1 = new Persona('Camila');

persona1.saludar = function () {
    console.log("Hola soy " + this.nombre);
}

persona1.saludar();