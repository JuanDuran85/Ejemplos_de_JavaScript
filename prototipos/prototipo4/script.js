// funcion constructora (es5)

function Estudiante (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Estudiante.prototype.nombreCompleto = function () {  
    return "El nombre del estudiante es: "+ this.nombre;
}

var estudiante1 = new Estudiante('Juan','Duran',35); // instanciar un objeto
var estudiante2 = new Estudiante('Paola','Salazar');

console.log(estudiante1);
console.log(estudiante1.nombreCompleto());
console.log(estudiante1.nombre);
console.log(estudiante1.edad);
console.log(estudiante2);
console.log(estudiante2.nombre);
console.log(estudiante2.edad);
estudiante2.edad = 30;
console.log(estudiante2.edad);
console.log(estudiante2);
Estudiante.prototype.rut = 123454566-4;
console.log(estudiante2.rut);






