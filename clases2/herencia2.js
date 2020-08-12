class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar(){
        console.log("Bienvenido usuario: "+this.nombre);
    }
}

class Aministrador extends Usuario {
    constructor(nombre){
        super(nombre);
    }
    saludar(){
        super.saludar();
        console.log("Panel de Administración - Usuario: "+ this.nombre);
    }
}

let adminUser = new Aministrador("Juan");
adminUser.saludar();