class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this._raza = raza;
    }
    get raza() {
        return this._raza;
    }
    set raza(raza) {
        this._raza = raza;
    }
};

let registrar = document.getElementById('registrar');
let ver = document.getElementById('ver');

registrar.addEventListener('click',registrando);
ver.addEventListener('click',observando);

function registrando() {
    let nombre = document.getElementById("nombre").value;
    let raza = document.getElementById("raza").value;
    var perrito = new Perro(nombre, raza);
    return perrito;
}

function observando() {

    const data = document.getElementById('data');
    const perroData = registrando();
    const nombre = perroData.nombre;
    const raza = perroData.raza;
    const div = document.createElement('div');
    div.innerHTML = `
        <p>  🐶 Nombre: ${nombre} - Raza: ${raza}</p>
    `;
    data.appendChild(div);
    document.getElementById('nombre').value = '';
    document.getElementById('raza').value = '';
}