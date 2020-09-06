/*  
15) Al ejercicio de Persona y Mascota creado anteriormente, agrega getters y setters para obtener el nombre de la mascota y el nombre de la persona.
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
  
/*  
16) A partir del siguiente diagrama UML, crea la función constructora para cada uno de los objetos, así mismo, crea una instancia de cada objeto.
*/ 

function Empresa(nombre, direccion, persona) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.persona = persona;
}

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

var persona1 = new Persona('Jocelyn',30);
var empresa1 = new Empresa('Desafio Latam','Santiago',persona1);
console.log(persona1);
console.log(empresa1);

/*  
17) Dado el siguiente diagrama UML, crea las funciones constructoras para cada una de las entidades, incluyendo métodos getters y setters para sus atributos.
*/

function Proyecto(nombre, persona){
    this._nombre = nombre;
    this.persona = persona || [];
}

function Persona(nombre){
    this._nombre = nombre;
}

Proyecto.prototype.getNombreProyecto = function () {  
    return this._nombre;
}

Proyecto.prototype.setAgregarPersona = function(persona_nueva){
    this.persona.push(persona_nueva);
}
  
var persona1 = new Persona('Juan');
var persona2 = new Persona('Jocelyn');
var proyecto1 = new Proyecto('JS',[persona1,persona2]);
console.log(proyecto1);
var persona3 = new Persona('Yecenia');
proyecto1.setAgregarPersona(persona3);
console.log(proyecto1);
console.log(proyecto1._nombre);

  
  