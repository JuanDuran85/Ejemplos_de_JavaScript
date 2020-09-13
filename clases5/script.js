/*  
8) Utiliza la sintaxis de clases (class) con getters y setters de ES6 para reescribir el siguiente código:

function Vehiculos(marca) {
  this._marca = function(){
     return marca;
  };
}

Vehiculos.prototype.getMarca = function(){
  return this._marca();
}

Vehiculos.prototype.setMarca = function(marca){
   this._marca = function(){
        return marca;
   }
}

var v1 = new Vehiculos("Ford");
v1.getMarca();
v1.setMarca("Kia");
v1.getMarca();

*/

class Vehiculos {
    constructor(marca){
        this._marca = function(){
           return marca;
        };
    }

    get marca(){
        return this._marca();
    }

    set marca(marca){
        this._marca = function(){
             return marca;
        }
    }

}
  
var v1 = new Vehiculos("Ford");
console.log(v1.marca);
v1.marca = "Kia";
console.log(v1.marca);

//-------------------------------------------------------------------------------

class Fechas {
  constructor(dia, mes, ano) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
  }
  get fechaActual (){
    return `La fecha ingresa fue: ${this._dia}-${this._mes}-${this._ano}`
  }
}

class Actual extends Fechas {
  constructor(dia, mes, ano){
    super(dia, mes, ano)
  }
  static hoy() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let ano = fecha.getFullYear();
    return new Actual(dia, mes, ano);
  }
}

let fechaNueva = new Actual(16,05,2000);
console.log(fechaNueva.fechaActual);
console.log(Actual.hoy());