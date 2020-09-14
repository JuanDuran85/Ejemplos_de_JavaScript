class Instrumento {
    constructor(serial, fabricante) {
        this.serial = serial;
        this.fabricante = fabricante;
    }
    datosInstrumento(){
        console.log(`El serial del instrumento es: ${this.serial}, mientras que el fabricante es: ${this.fabricante}`);
    }
}

class Guitarra extends Instrumento {
    constructor(serial, fabricante, numeroCuerdas, numeroTrastes) {
        super(serial, fabricante)
        this.numeroCuerdas = numeroCuerdas;
        this.numeroTrastes = numeroTrastes;
    }
    datosGuitarra(){
        console.log(`El numero de cuerdas es: ${this.numeroCuerdas}, mientras que el numero de trastes de la guitarra es: ${this.numeroTrastes}`);
    }
}

class Acustica extends Guitarra {
    constructor(serial, fabricante, numeroCuerdas, numeroTrastes, tipoTapa) {
        super(serial, fabricante, numeroCuerdas, numeroTrastes)
        this.tipoTapa = tipoTapa;
    }
}

class Electrica extends Guitarra {
    constructor(serial, fabricante, numeroCuerdas, numeroTrastes, tipoPastilla) {
        super(serial, fabricante, numeroCuerdas, numeroTrastes)
        this.tipoPastilla = tipoPastilla;
    }
}

let acustica = new Acustica('IB24456A', 'Ibanez', 6, 22, 'Tapa sólida');
let electrica = new Electrica('B00HQWRTTU', 'Schecter', 8, 24, 'Humbucker');
acustica.datosGuitarra();
acustica.datosInstrumento();
electrica.datosGuitarra();
electrica.datosInstrumento();