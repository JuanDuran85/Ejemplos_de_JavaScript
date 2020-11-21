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

// ------------------------------------------------------------------------------

class Tienda {
    constructor(direccion) {
        this.direccion = direccion;
    }
    datosTienda(){
        console.log(`La dirección del local es: ${this.direccion}`);
    }
}

class Instrumento extends Tienda {
    constructor(direccion, serial) {
        super(direccion)
        this.serial = serial;

    }
    datosInstrumento(){
        console.log(`El serial delo instrumento es es: ${this.serial}`);
    }
}

class Cuerdas extends Instrumento {
    constructor(direccion, serial, numeroCuerdas,) {
        super(direccion, serial)
        this.numeroCuerdas = numeroCuerdas;
    }
}

class Viento extends Instrumento {
    constructor(direccion, serial, material_cosntruc,) {
        super(direccion, serial)
        this.material_cosntruc = material_cosntruc;
    }
}

let guitarra = new Cuerdas('Santiago de Chile', 'B00HQWRTTU', 6);
let trompeta = new Viento('Santiago de Chile','XERF45TGFD','Metal');
guitarra.datosTienda();
guitarra.datosInstrumento();
trompeta.datosTienda();
trompeta.datosInstrumento();