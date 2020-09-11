class Vehiculo{
    constructor(marca, color, matricula) {
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }
 }
 
 class Coche extends Vehiculo{
    constructor(marca,color,matricula){
       super(marca,color,matricula);
    }
 }
 
 class Moto extends Vehiculo{
    constructor(marca,color,matricula){
       super(marca,color,matricula);
    }
 }
 
 class Bus extends Vehiculo{
    constructor(marca,color,matricula){
       super(marca,color,matricula);
    }
 }

 let coche1 = new Coche('Toyota','Negro', '123ABC');
 let moto1 = new Moto('Honda','Rojo', '456CDF');
 let bus1 = new Bus('Fuso','Blanco', '678EDC');

 console.log(coche1);
 console.log(moto1);
 console.log(bus1);
 console.log(coche1.marca);
 console.log(moto1.color);
 console.log(bus1.matricula);

 //--------------------------------------------------------------------------------
console.log("--------------------------------------------------------------------");

 class Personal{
    constructor(nombre, departamento, tipo, activo) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.tipo = tipo;
        this.activo = activo;
    }
}

class Administrativo extends Personal {
    constructor(nombre, departamento, tipo, activo){
       super(nombre, departamento, tipo, activo);
    }
}

class Docente extends Personal {
    constructor(nombre, departamento, tipo, activo){
       super(nombre, departamento, tipo, activo);
    }
}
 
class Obrero extends Personal {
}

let admin1 = new Administrativo('Jocelyn','Contenido', 'Fijo', true);
let docente1 = new Docente('Juan','FrontEnd', 'Contratado', true);
let obrero1 = new Obrero('Manuel','Electricidad','Fijo',true);
console.log(admin1);
console.log(docente1);
console.log(obrero1);