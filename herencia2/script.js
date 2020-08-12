class Mamifero {
    constructor(tipoSangre){
        this._tipoSangre = tipoSangre;
    }

    get tipoSangre(){
        return this._tipoSangre;
    }
};

class Felino extends Mamifero {
    constructor(tipoSangre, rugido) {
        super(tipoSangre);
        this._rugido = rugido;
    }
    get rugido() {
        return this._rugido;
    }
};

class Gato extends Felino {
    constructor(tipoSangre, rugido, vacuna) {
        super(tipoSangre, rugido);
        this._vacuna = vacuna;
    }
    get vacuna() {
        return this._vacuna;
    }
};

let gatico = new Gato('O+', 'No', 'Si');
let leon = new Felino('O-', 'Si', 'No');
let mamifero = new Mamifero('A+', 'Si', 'Si');

console.log(Object.getPrototypeOf(gatico));
console.log(Object.getPrototypeOf(leon));
console.log(Object.getPrototypeOf(mamifero));
