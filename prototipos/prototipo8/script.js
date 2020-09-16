// aplicando closures
function Guitarra(n_cuerdas,tipo,n_trastes) {
    this._n_cuerdas = function () {  
        return n_cuerdas;
    };
    this._tipo = tipo;

    // se crea una variable local dentro de la funcion constructora
    var _n_trastes = n_trastes;
    // luego se declaran los metodos globales para variables locales
    this.getTrastes = function (){
        return _n_trastes;
    }
    this.setTrastes = function (nuevo_trastes){
        _n_trastes = nuevo_trastes;
    }

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

var g1 = Object.freeze(new Guitarra(8,'electrica',24));
console.log(g1);
// si se intenta acceder a la propiedad, el resultado sera undefined
console.log(g1._n_trastes);
console.log(g1.n_trastes);
// si intentamos modificar, igualmente no sufrira efectos
g1._n_trastes = 22;
g1.n_trastes = 16;
console.log(g1._n_trastes);
console.log(g1.n_trastes);
//para poder mostrar la propiedad se puede acceder al metodo preparado para ella
console.log(g1.getTrastes());

