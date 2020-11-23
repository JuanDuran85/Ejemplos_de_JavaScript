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


// --------------------------------------------------------------------------------

class Game {
    constructor(weight){
           this.weight = weight;
    }
    stop(){
           return `El juego se encuentra detenido momentáneamente`;
    }
}

class Tank extends Game {
    constructor(weight,bullet){
           super (weight);
           this.bullet = bullet;
    }
    stop(){
           return `El Tanque se encuentra detenido...`;
    }
}
class Plane extends Game {
    constructor(weight,bullet){
         super (weight);
         this.bullet = bullet;
    }
    stop(){
           return `El Avión apagó los motores`;
    }
}

let juego1 = new Game(20,300);
let tanque1 = new Tank(100,20);
let avion1 = new Plane(54,2000);

console.log(juego1.stop());
console.log(tanque1.stop());
console.log(avion1.stop());