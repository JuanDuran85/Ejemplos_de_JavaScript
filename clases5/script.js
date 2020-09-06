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