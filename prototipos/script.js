let animal = Object.create(null);

animal.vivo = true;

animal.estaVivo = function () {
    if (animal.vivo){
        console.log("El animal esta vivo");
    }
}

//herencia de prototipos, la cual funciona por delegacion. 
let perro = Object.create(animal);

perro.estaVivo();

// -----------------------------------------------

function User() {};

User.prototype.saludar = function(){
    console.log("Saludos desde la funcion User...");
}

function Administrador(){};

Administrador.prototype = new User();

let admin1 = new Administrador();
admin1.saludar();


