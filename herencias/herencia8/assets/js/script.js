let formulario = document.querySelector('form');

let agregando = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let direccion = document.getElementById('direccion').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let telefono = document.getElementById('telefono').value;
    let tipo = document.getElementById('tipo').value;

    switch (tipo) {
        case 'perro':
                let perro = new Perro(propietario,direccion,telefono,nombreMascota,tipo,enfermedad);
                mostrarResultado(perro);
            break;
        case 'gato':
                let gato = new Gato(propietario,direccion,telefono,nombreMascota,tipo,enfermedad);
                mostrarResultado(gato);
            break;
        case 'conejo':
                let conejo = new Conejo(propietario,direccion,telefono,nombreMascota,tipo,enfermedad);
                mostrarResultado(conejo);
            break;
    
        default:
            break;
    }
}

let mostrarResultado = (valor) => {
    let resultado = document.querySelector('#resultado ul');
    let li1 = document.createElement('li');
    li1.innerHTML = `${valor.datosPropietario()}`;
    let li2 = document.createElement('li');
    li2.innerHTML = `${valor.datosAnimal()}, y la enfermedad es: ${valor.enfermedad}`;
    resultado.appendChild(li1);
    resultado.appendChild(li2);
}

formulario.addEventListener('submit',agregando);

class Propietario {
    constructor(nombreP,direccion,telefono) {
         this.nombreP = nombreP;
         this.direccion = direccion;
         this.telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombreP}, la direccion: ${this.direccion} y el numero telefonico es: ${this.telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombreP,direccion,telefono,nombreA,tipo) {
        super(nombreP,direccion,telefono)
        this.nombreA = nombreA;
        this.tipo = tipo;
    }
    datosAnimal(){
        return `El nombre del animal es: ${this.nombreA}, y es un: ${this.tipo}`;
    }
}
 
class Perro extends Animal {
    constructor(nombreP,direccion,telefono,nombreA,tipo,enfermedad) {
        super(nombreP,direccion,telefono,nombreA,tipo);
        this._enfermedad = enfermedad;
    }
        
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}
 
class Gato extends Animal {
    constructor(nombreP,direccion,telefono,nombreA,tipo,enfermedad) {
        super(nombreP,direccion,telefono,nombreA,tipo);
        this._enfermedad = enfermedad;
    }
        
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}
 
class Conejo extends Animal {
    constructor(nombreP,direccion,telefono,nombreA,tipo,enfermedad) {
        super(nombreP,direccion,telefono,nombreA,tipo);
        this._enfermedad = enfermedad;
    }
        
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}