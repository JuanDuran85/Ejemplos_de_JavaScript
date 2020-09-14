class Curso {
    constructor(titulo,turno,alumno) {
        this.titulo = titulo;
        this.turno = turno;
        this.alumno = alumno;
    }
    inscribirAlumno(){
        console.log(`El alumno: ${this.alumno}, se ha inscrito en el curso: ${this.titulo}, perteneciente al turno: ${this.turno}`);    
    }

}

class JavaScript extends Curso {
    constructor(titulo,turno,alumno,nivel,tema) {
        super (titulo,turno,alumno)
        this.nivel = nivel;
        this.tema = tema;
    }
    temaSolicitado() {
        console.log(`El nivel y el tema solicitado fueron: ${this.nivel} y ${this.tema} respectivamente`);
    }
}

var alumno1 = new JavaScript('Programando con JavaScript', 'Nocturno', 'Juan', 'Basico', 'Introduccion');
console.log(alumno1);
alumno1.temaSolicitado();
alumno1.inscribirAlumno();