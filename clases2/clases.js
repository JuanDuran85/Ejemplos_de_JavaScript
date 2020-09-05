// Declaraciones de clases
/* class Usuario {} */
// una clase solo puede tener un metodo constructor

// Expresiones de clases

/* let Usuario = class {}
let Usuario = class Usuario{} */

class Curso {
    constructor(titulo) {
        this.titulo = titulo;
    }

    inscribir(alumno){
        console.log(`El alumno: ${alumno}, esta inscrito en el curso: ${this.titulo}`)
    }
}

let curso1 = new Curso("JavaScript");
curso1.inscribir("Juan");
//----------------------------------------------------------
console.log("-----------------------------------------------------");

class Estudiante {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
   }
 }
 
 let e1 = new Estudiante('Juan',35);
 console.log(e1);

 //----------------------------------------------------------
console.log("-----------------------------------------------------");

class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }
    calcularArea(){
      return this.lado * this.lado;
    }
 }
 let c1 = new Cuadrado(5);
 console.log(c1.calcularArea());

 //----------------------------------------------------------
 console.log("-----------------------------------------------------");

class Perro {
    constructor(raza){
       this._raza = raza;
    }
    get raza(){
       return this._raza;
    }
    set raza(nueva_raza){
       this._raza = nueva_raza;
    }
}

let perro1 = new Perro('Pastor Aleman');
console.log(perro1.raza);
perro1.raza = 'Pastor Belga';
console.log(perro1.raza);

//----------------------------------------------------------
console.log("-----------------------------------------------------");

class Rectangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
    calcularArea() {
        return this.x * this.y;
    }
    calcularPerimetro() {
        return (this.x + this.y) * 2;
    }
}

class Circulo {
    constructor(r) {
        this.r = r;
    }
    calcularArea() {
        return this.r * this.r * Math.PI;
    }
    calcularPerimetro() {
        return this.r * Math.PI * 2;
    }
}

let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());
let circulo1 = new Circulo(3);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());