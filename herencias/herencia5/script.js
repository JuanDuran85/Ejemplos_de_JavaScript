class seleccionFutbol {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this.edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }
    datosJugador(){
        console.log(`El nombre del jugador es: ${this.nombre}, y la edad es: ${this.edad}`);
    }
}

class Jugadores extends seleccionFutbol {
    constructor(nombre, edad, dorsal, lesiones) {
        super(nombre, edad)
        this.dorsal = dorsal;
        this._lesiones = lesiones;
    }
    get lesiones(){
        return this._lesiones
    }
    set lesiones(nuevas_lesiones){
        this._lesiones = nuevas_lesiones;
    }
}

class Arqueros extends Jugadores {
    constructor(nombre, edad, dorsal, lesiones, alimentacion, titular) {
        super(nombre, edad, dorsal, lesiones)
        this._alimentacion = alimentacion;
        this.titular = titular;
    }
    get alimentacion(){
        return this._alimentacion = alimentacion;
    }
    set alimentacion(n_alimentacion){
        this._alimentacion = n_alimentacion;
    }
    infoArquero(){
        console.log(`La alimentación del jugador es ${this._alimentacion}, ¿es titular?: ${this.titular}, el número en la camiseta es: ${this.dorsal}, lesiones conocidas: ${this.lesiones}, nombre: ${this.nombre}, edad: ${this.edad}`);
    }
}

let arquero = new Arqueros('Juan', '35', 3, 'Rotura de meniscos interno', 'Mayor a 5000 calorias', 'No');
arquero.datosJugador();
arquero.infoArquero();