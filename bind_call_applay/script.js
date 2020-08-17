//call y applay ejecutan la funcion inmediata, ya que asignan el valor de this y ejecutan la funcion inmediatamente...

function ejecutar(funcion) {
    funcion.call(tutor);
}

let tutor = {
    nombre: "Juan",
    apellido: "Duran",
    edad: 35,
    nombreCompleto: function(){
        console.log(`El tutor es: ${this.nombre} ${this.apellido}`);
    }
}

ejecutar(tutor.nombreCompleto);

function saludar(nombre) {
    console.log(`Saludos ${nombre}`);    
}

saludar.call(this,"Juan");

//--------------------------------------------------------------

function ejecutar2(funcion) {
    funcion.apply(tutor);
}

let tutor2 = {
    nombre: "Juan",
    apellido: "Duran",
    edad: 35,
    nombreCompleto: function(){
        console.log(`El tutor es: ${this.nombre} ${this.apellido}`);
    }
}

ejecutar2(tutor2.nombreCompleto);

function saludar2(nombre) {
    console.log(`Saludos ${nombre}`);    
}

saludar2.apply(this,["Juan"]);

//----------------------------------------------------------------------

function ejecutar3(funcion) {
    funcion.apply(tutor3);
}

let tutor3 = {
    nombre: "Juan",
    apellido: "Duran",
    edad: 35,
    nombreCompleto: function(){
        console.log(`El tutor es: ${this.nombre} ${this.apellido}`);
    }
}

ejecutar3(tutor3.nombreCompleto.bind(tutor3));
