/*  
15) Al ejercicio de Persona y Mascota creado anteriormente, agrega getters y setters para obtener el nombre de la mascota y el nombre de la persona.

16) A partir del siguiente diagrama UML, crea la función constructora para cada uno de los objetos, así mismo, crea una instancia de cada objeto.
*/

function Persona(nombre, mascota){
    this._nombre = function () {  
        return nombre;   
    }
    this._mascota = function () {
        return mascota;
    }
}

function Mascota(nombre){
    this._nombre = function () {  
        return nombre;
    }
}

Persona.prototype.getNombrePersona = function () {  
    return this._nombre();
}
Mascota.prototype.getNombreMascota = function () {  
    return this._nombre();
}

Persona.prototype.setNombrePersona = function (nombre) {
    this._nombre = function () {  
        return nombre;   
    }
}
Mascota.prototype.setNombreMascota = function (nombre) {
    this._nombre = function () {  
        return nombre;
    }
}

var m1 = new Mascota('Snowball');
var p1 = new Persona('Julián', m1);
console.log(p1);
console.log(m1);
console.log(m1.getNombreMascota());
console.log(p1.getNombrePersona());
m1.setNombreMascota('Taty');
console.log(m1.getNombreMascota());
  
  
