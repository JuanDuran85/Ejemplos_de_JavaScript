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
                let perro = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
                mostrarResultado(perro);
            break;
        case 'gato':
                let gato = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
                mostrarResultado(gato);
            break;
        case 'conejo':
                let conejo = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
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
    li2.innerHTML = `${valor.datosAnimal()}, mientras que el nombre de la mascota es: ${valor.nombreA} y la enfermedad es: ${valor.enfermedad}`;
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
        return `El nombre del dueño es: ${this.nombreP}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
};

class Animal extends Propietario{
    constructor(nombreP,direccion,telefono,tipo) {
        super(nombreP,direccion,telefono)
        this.tipo = tipo;
    }
    datosAnimal(){
        return `El tipo de animal es un: ${this.tipo}`;
    }
};
 
class Mascota extends Animal {
    constructor(nombreP,direccion,telefono,tipo,nombreA,enfermedad) {
        super(nombreP,direccion,telefono,tipo);
        this._nombreA = nombreA;
        this._enfermedad = enfermedad;
    }

    get nombreA() {
        return this._nombreA;
    }
    set nombreA(nombreA) {
        this._nombreA = nombreA;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
};