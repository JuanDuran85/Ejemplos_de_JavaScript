// implementando WeakMap

// se crea una variable y se le instancia el objeto weakmap

var _privado = new WeakMap();

function Guitarra(n_cuerdas,tipo,n_trastes) {
    //para proteger todas las propiedades, lo mejor es crear un objeto (nueva variable sin this) con las propiedades y ninguna debe utilizar del this. Se implementa la notacion "_" para cada una de las propiedades dentro del objeto

    var atributosPrivados = {
        _n_cuerdas: n_cuerdas,
        _tipo: tipo,
        _n_trastes: n_trastes
    }

    // luego se debe implementar uno de los metodos de WeakMap (en este caso el set) que esta disponible en la instancia del objeto sobre la variable global creada. Pasando dos argumentos, el primero sera el this, el segundo sera el objeto creado con las propiedades sobre un objeto

    _privado.set(this,{atributosPrivados});
}

// ahora para poder acceder a cada una de las propiedades, se deben implementar metodos del tipo get por individual o separado. Utilizando el metodo get de weakmap
Guitarra.prototype.getPropiedades = function (){
    return {
        _tipo: _privado.get(this).atributosPrivados['_tipo'],
        _n_cuerdas: _privado.get(this).atributosPrivados['_n_cuerdas'],
    }
}
// mostrando una propiedad sola, individualmente
Guitarra.prototype.getTrastes = function (){
    return _privado.get(this).atributosPrivados['_n_trastes'];
}

// realizando el set o modificacion de una propiedad
Guitarra.prototype.setTipo = function (nuevo_tipo) {  
    if (nuevo_tipo.length <= 4){
        _privado.get(this).atributosPrivados['_tipo'] = 'nuevo_tipo';
    } else {
        _privado.get(this).atributosPrivados['_tipo'] = nuevo_tipo;
    }
}

Guitarra.prototype.tocarPartitura = function () {  
    return "Tocando la partitura XYZ, con una guitarra de "+ this.n_cuerdas + " cuerdas.";
}

var g1 = new Guitarra(8,'electrica',24);
console.log(g1); // eso mostrara el objeto instanciado vacio
// mostrando propiedades mediante los metodos
console.log(g1.getPropiedades());
console.log("Tipo de guitarra: " + g1.getPropiedades()['_tipo']);
console.log("Numero de cuerdas: " + g1.getPropiedades()['_n_cuerdas']);
// mostrando una propiedad por individual
console.log("Numero de trastes: " + g1.getTrastes());
// modificando por ejemplo una propiedad mediante metodos
g1.setTipo('Acustica');
console.log("Tipo de guitarra: " + g1.getPropiedades()['_tipo']);
console.log(g1); // sigue estando el objeto vacio
// si se intenta mostrar una de las propiedades directamente el resultado es undefined
console.log(g1._tipo);
console.log(g1.tipo);
console.log(g1._n_cuerdas);
// pero si intentamos modificar algunas de las propiedades directamente sobre el objetop, nos genera un problema:
g1._tipo = "Electrica"; // al hacer esto estamos creando una nueva propiedad sobre el objeto
console.log(g1._tipo);
console.log(g1); // al mostrar el objeto, ya no se encuentra vacio.
console.log("-----------------------------------------------------------------");
// para proteger al objeto contra cambios externos, es decir, para evitar agregarle nuevas propiedades por error, se puede implementar el Object.freeze, este método congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido.
var g2 = Object.freeze(new Guitarra(8,'electrica',24));
// si mostramos nuestro objeto completo, sigue estando vacio
console.log(g2);
// intentemos modificar una propiedad
g2._tipo = "Acustica";
// el Object.freeze() impide que se modifiquen propiedades direactamente sobre el objeto o en si defecto se agreguen.
console.log(g2);
console.log(g2.getPropiedades()['_tipo']);
g2.setTipo("Acustica");
console.log(g2);
console.log(g2.getPropiedades()['_tipo']);