/* 
    En el siguiente ejercicio, se deben crear dos objetos mediante funciones constructoras, uno para “Mascota” y otro para “Persona”, luego se debe instanciar cada uno de ellos, pero en la instancia del objeto Persona se debe pasar como argumento el objeto instanciado en Mascota, todo esto se debe realizar según las indicaciones mostradas en el diagrama UML en la imagen anterior. Por lo tanto, sigamos los siguientes pasos:

*/

class Persona {
    constructor(nombre, mascota){
        this._nombre = () => nombre;
        this._mascota = () => mascota;
    }

    get nombre(){
        return this._nombre;
    }

    get mascota(){
        return this._mascota;
    }

    set nombre(){
        this._nombre = () => nombre;
    }

}

class Mascota {
    constructor(nombreMascota){
        this._nombreMascota = () => nombreMascota;
    }

    set nombreMascota(){
        this._nombreMascota = () => nombreMascota;
    }
}

let mascota1 = new Mascota('taty');
let persona1 = new Persona('Juan', mascota1);

console.log(mascota1);
console.log(persona1);
console.log(persona1.mascota());

console.log(`Nombre de la persona: ${persona1.nombre()} y el nombre de la mascota ${persona1.mascota().nombreMascota}`);