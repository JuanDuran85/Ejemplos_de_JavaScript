//creando objetos con funciones constructoras
function Curso() {
    this.titulo = "Ejemplos de programación con JavaScript";

    this.inscribir = function(alumno) {
        console.log(`El alumno: ${alumno} se ha inscrito en el curso: ${this.titulo}`);    
    }
}

let alumno = new Curso()

alumno.inscribir("Juan");
// ------------------------------------------------------------
function Curso2(titulo) {
    this.titulo = titulo;

    this.inscribir = function(alumno) {
        console.log(`El alumno: ${alumno}, se ha inscrito en el curso: ${this.titulo}`);    
    }
}

let alumno2 = new Curso2('JavaScript')

alumno2.inscribir("Juan");