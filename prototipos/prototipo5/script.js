function Guitarra(n_cuerdas,tipo,n_trastes) {
    this._n_cuerdas = function () {  
        return n_cuerdas;
    };
    this._tipo = tipo;
    this.n_trastes = n_trastes;
}

Guitarra.prototype.getTipo = function (){
    return this._tipo;
}

Guitarra.prototype.setTipo = function (nuevo_tipo) {  
    if (nuevo_tipo.length <= 4){
        this._tipo = "sin tipo";
    } else {
        this._tipo = tipo;
    }
}

Guitarra.prototype.tocarPartitura = function () {  
    return "Tocando la partitura XYZ, con una guitarra de "+ this.n_cuerdas + " cuerdas.";
}

var g1 = new Guitarra(8,'electrica',24);
console.log(g1);
// se modifica directamente la propiedad
g1._tipo = "Electrica"
console.log(g1);
console.log(g1.getTipo());
// incluse se pueden agregar nuevas propiedades al objeto
g1.marca = "Ibanez";
console.log(g1);
// asi se tenga una funcion para la propiedad se puede consultar directamente
console.log(g1._n_cuerdas());
// asi tengamos una funcion para una propiedad, la podemos modificar directamente
g1._n_cuerdas = 12;
console.log(g1);


// estas son malas practicas que se deben evitar utilizando closures o implementado WeakMap por ejemplo. Tambien en conjunto con  Object.defineProperty y Object.freeze se puede bloquear la modificacion del objeto directamente
 