class Juego {
    constructor(vidas, balas){
        this.vidas = vidas;
        this.balas = balas;
    }

    disparar(){
        return `Se han disparado ${this.balas} en el juego`;
    }
}

class Tanques extends Juego {
    constructor(vidas,tracion,balas){
        super (vidas,balas);
        this.tracion = tracion;
    }
    disparar(){
        return `Se han disparado ${this.balas} en el juego`;
    }
}

class Aviones extends Juego {
    constructor(vidas,propulsion,balas){
        super(vidas,balas);
        this.propulsion = propulsion;
    }
    disparar(){
        return `Se han disparado ${this.balas} en el juego`;
    }
}

let juego1 = new Juego(20,300);
console.log(juego1.disparar());
let tanque1 = new Tanques(100,'orugas',20);
console.log(tanque1.disparar());
let avion1 = new Aviones(54,'turbinas',2000);
console.log(avion1.disparar());