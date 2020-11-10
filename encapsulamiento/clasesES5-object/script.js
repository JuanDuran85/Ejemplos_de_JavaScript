function Estudiante(nombre){
    let _nombre = nombre;

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            console.log('get nombre');
            return _nombre
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nuevo_nombre) {  
            console.log("set nombre");
            _nombre = nuevo_nombre
        }
    });

    /* Object.freeze(this._getNombre); */
}

var estudiante1 = new Estudiante('Juan');
console.log(estudiante1);
console.log(estudiante1._getNombre);
estudiante1._setNombre = "Jocelyn"
console.log(estudiante1._getNombre);

//-------------------------------------------------------------------------

function Estudiante2(nombre2){
    let _nombre2 = nombre2;

    Object.defineProperty(this, "_nombre2", {value: nombre2});
};

Estudiante2.prototype.nombre = function(){
    return this._nombre2;
};


let estudiante2 = new Estudiante2('Juan');
console.log(estudiante2);
console.log(estudiante2.nombre());

//-------------------------------------------------------------------------

function Estudiante(nombre){
    let getNombre = nombre;

    Object.defineProperty(this, "getNombre", {value: nombre});
};

let estudiante1 = new Estudiante('Juan');
estudiante1.getNombre = "Jocelyn";
console.log(estudiante1.getNombre);

//----------------------------------------------------------

function Usuario(tipo){
    let getTipo = tipo;
      Object.defineProperty(this, "getTipo", {value: tipo});
}

var usuario1 = new Usuario('Administrador');
usuario1.getTipo = "Invitado";
console.log(usuario1.getTipo);

//----------------------------------------------------------

function Vehiculos(marca) {
    var _marca = marca;

    Object.defineProperty(this, "_getMarca", {
        get: function () {
            return _marca
        }
    });

    Object.defineProperty(this, "_setMarca", {
        set: function (marca) {  
            _marca = marca
        }
    });
};

Vehiculos.prototype.getMarca = function(){
    return this._getMarca;
};

Vehiculos.prototype.setMarca = function(marca){
    this._setMarca = marca;
};

var v1 = new Vehiculos("Ford");
console.log(v1.getMarca());
v1.setMarca("Kia");
console.log(v1.getMarca());
v1._marca = "Toyota";
console.log(v1.getMarca());

// -------------------------------------------------------------------
function Carta(numero, pinta){
    var _numero = numero;
    var _pinta = pinta;

    Object.defineProperty(this, "_getNumero", {
        get: function () {
            return _numero;
        }
    });

    Object.defineProperty(this, "_setNumero", {
        set: function (numero) {  
            _numero = numero;
        }
    });

    Object.defineProperty(this, "_getPinta", {
        get: function () {
            return _pinta
        }
    });

    Object.defineProperty(this, "_setPinta", {
        set: function (pinta) {  
            _pinta = pinta
        }
    });
};

Carta.prototype.getNumero = function(){
    return this._getNumero;
};

Carta.prototype.setNumero = function(numero){
    this._setNumero = numero;
};

Carta.prototype.getPinta = function(){
    return this._getPinta;
};

Carta.prototype.setPinta = function(pinta){
    this._setPinta = pinta;
};
  
c1 = new Carta(2, 'Corazón');
c2 = new Carta(4, 'Espadas');

console.log(c1.getNumero());
console.log(c2.getNumero());
console.log(c1.getPinta());
console.log(c2.getPinta());
c1.setNumero(5);
c2.setNumero(7);
c1.setPinta('Tréboles');
c2.setPinta('Rombos');
console.log(c1.getNumero());
console.log(c2.getNumero());
console.log(c1.getPinta());
console.log(c2.getPinta());