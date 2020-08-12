// Declaraciones de clases
/* class Usuario {} */
// una clase solo puede tener un metodo constructor

// Expresiones de clases

/* let Usuario = class {}
let Usuario = class Usuario{} */

class Curso {
    constructor(titulo) {
        this.titulo = titulo;
    }

    inscribir(alumno){
        console.log(`El alumno: ${alumno}, esta inscrito en el curso: ${this.titulo}`)
    }
}

let curso1 = new Curso("JavaScript");
curso1.inscribir("Juan");