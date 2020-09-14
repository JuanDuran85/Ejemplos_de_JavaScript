class Constructora {
    constructor(nombreCliente, tipoCliente){
        this.nombreCliente = nombreCliente;
        this.tipoCliente = tipoCliente;
    }
    mostrarDatos(){
        console.log(`El nombre del cliente es: ${this.nombreCliente} y el tipo es: ${this.tipoCliente}`);
    }
}

class Cliente extends Constructora {
    constructor(nombreCliente, tipoCliente, codigoCliente){
        super (nombreCliente, tipoCliente);
        this.codigoCliente = codigoCliente;
    }
    mostrarCodigo(){
        console.log(`El codigo del cliente es: ${this.codigoCliente}`);
    }
}

let cliente = new Cliente('Inmoviliaria XYZ', 'Medio', '546FFGHTF5');
cliente.mostrarCodigo();
cliente.mostrarDatos()