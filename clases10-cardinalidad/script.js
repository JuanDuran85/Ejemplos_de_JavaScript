class Persona {
    constructor(nombre, redSocial) {
        this._nombre = () => nombre;
        // trabajar como arreglo las propiedades que pueden tener N cantidad de valores
        this._redSocial = () => redSocial || [];
    }

    get nombre(){
        return this._nombre();
    }

    set nombre(nuevo_nombre) {
        this._nombre = () => nuevo_nombre;
    }

    get redSocial(){
        return this._redSocial();
    }

    agregarRedes(nueva_red){
        this._redSocial().push(nueva_red);
    }

    nombreRedes(){
        this._redSocial().forEach((element,index) =>{
            if (element._id() == 3) {
                console.log(`El nombre es: ${element._nombreRedSocial()}, se encuentra en la posicion ${index}`);
            }
        });
    }
}

class RedSocial {
    constructor(nombreRedSocial,id){
        this._nombreRedSocial = () => nombreRedSocial;
        this._id = () => id;
    }
}

let facebook = new RedSocial('JuanDuran',1);
let github = new RedSocial('JuanDuran85',2);

let persona1 = new Persona('Juan',[facebook,github]); // pasar el argumento como arreglo del objeto
let twitter = new RedSocial('JuanDuran85',3);
persona1.agregarRedes(twitter);
persona1.nombreRedes();
console.log(persona1);
persona1.nombre = "Manuel";
console.log(persona1.nombre);
console.log(persona1);
persona1.redSocial = "CAsa"
console.log(persona1._redSocial());