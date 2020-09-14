let formulario = document.querySelector('form');

let evaluacion = (event) =>{
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let duracion = document.getElementById('duracion').value;
    let varios = document.getElementById('varios').value;
    let tipo = document.getElementById('tipo').value;
    let resultado = document.getElementById('resultado');

    if (tipo == 'quiz') {
        let quiz = new Quiz(nombre,apellido,duracion,tipo,varios);
        resultado.innerHTML = `${quiz.mostrarDatos()}. <br> ${quiz.mostrarPrueba()}`
    } else if (tipo == 'desafio') {
        let desafio = new Desafio(nombre,apellido,duracion,tipo,varios);
        resultado.innerHTML = `${desafio.mostrarDatos()}. <br> ${desafio.mostrarPrueba()}`
    } else {
        let proyecto = new Proyecto(nombre,apellido,duracion,tipo,varios);
        resultado.innerHTML = `${proyecto.mostrarDatos()}. <br> ${proyecto.mostrarPrueba()}`
    }
}

formulario.addEventListener('submit',evaluacion);

class Plataforma {
    constructor(nombre,apellido,durancion, tipo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.durancion = durancion;
        this.tipo = tipo;
    }

    mostrarDatos(){
        return (`Los datos del participante son: ${this.nombre} ${this.apellido}.`);
    }
}

class Quiz extends Plataforma {
    constructor(nombre,apellido, durancion, tipo, n_preguntas) {
        super(nombre,apellido,durancion, tipo);
        this._n_preguntas = n_preguntas;
    }

    get n_preguntas(){
        return this._n_preguntas;
    }

    mostrarPrueba(){
        return (`Los datos de la prueba son: Tipo ${this.tipo}, con una duracion de ${this.durancion} minutos y con ${this._n_preguntas} pregunta(s)`);
    }
}

class Desafio extends Plataforma {
    constructor(nombre,apellido, durancion, tipo, n_requerimientos) {
        super(nombre,apellido,durancion, tipo);
        this._n_requerimientos = n_requerimientos;
    }

    get n_requerimientos(){
        return this._n_requerimientos;
    }

    mostrarPrueba(){
        return (`Los datos de la prueba son: Tipo ${this.tipo}, con una duracion de ${this.durancion} minutos y con ${this._n_requerimientos} requerimiento(s)`);
    }
}

class Proyecto extends Plataforma {
    constructor(nombre,apellido, durancion, tipo, n_temas) {
        super(nombre,apellido,durancion, tipo);
        this._n_temas = n_temas;
    }

    get n_temas(){
        return this._n_temas;
    }

    mostrarPrueba(){
        return (`Los datos de la prueba son: Tipo ${this.tipo}, con una duracion de ${this.durancion} minutos y con ${this._n_temas} tema(s)`);
    }
}