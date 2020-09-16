function Guitarra(n_cuerdas,tipo,n_trastes) {
    this._n_cuerdas = function () {  
        return n_cuerdas;
    };
    this._tipo = tipo;
    // otra forma de proteger las propiedades de cambios innecesarios y/o directos es mediante los metodos Object.defineProperty y Object.freeze
    var _n_trastes = n_trastes;
    Object.defineProperty(this,'trastes', { value: _n_trastes });
    Object.freeze(this.trastes);
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
g1.trastes = 22;
console.log(g1.trastes);
g1.material = "madera";
console.log(g1);
