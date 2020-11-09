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