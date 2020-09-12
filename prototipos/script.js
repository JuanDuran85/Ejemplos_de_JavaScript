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

//--------------------------------------------------------------------------------

function Poligono(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
}

function Rectangulo(alto,ancho){
    this.prototype = Object.create(Poligono.prototype);
    Poligono.call(this, alto, ancho);
}

Rectangulo.prototype.calcularArea = function(){
    return this.alto * this.ancho;
}

var rec1 = new Rectangulo(3,4);
console.log(rec1.calcularArea());
  


