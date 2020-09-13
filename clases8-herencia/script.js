class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre_nuevo) {
        this._nombre = nombre_nuevo;
    }
}

class Herbivoro extends Animal {
    constructor(nombre, tipoComida) {
        super(nombre);
        this._tipoComida = tipoComida;
    }
    get tipoComida() {
        return this._tipoComida;
    }
    set tipoComida(comidaNueva) {
        this._tipoComida = comidaNueva;
    }
}

class Conejo extends Herbivoro {
    constructor(nombre, tipoComida, distancia) {
        super(nombre, tipoComida);
        this._distancia = distancia;
    }
    get distancia() {
        return this._distancia;
    }
    set distancia(distanciaNueva) {
        this._distancia = distanciaNueva;
    }
    infoConejo() {
        return `${this.nombre} come ${this.tipoComida} además salta ${this._distancia}`;
    }
}

const conejo = new Conejo('Pepito','Zanahorias 🥕', '2 metros');
console.log(conejo.nombre);
console.log(conejo.tipoComida);
console.log(conejo.distancia);
console.log(conejo.infoConejo());

const conejo2 = new Herbivoro('Roger', 'Lechuga 🥬');
console.log(conejo2.nombre);
console.log(conejo2.tipoComida);
console.log(conejo2.distancia);
conejo2.nombre = "PomPom";
console.log(conejo2.nombre);
conejo2.tipoComida = "Mani 🥜"
console.log(conejo2.tipoComida);
