export default class Personaje {
    constructor(id,nombre,especie,imagen){
        let _id = id;
        this.getId = () => _id;

        let _nombre = nombre;
        this.getNombre = () => _nombre;

        this.especie = especie;
        this.imagen = imagen;
    }
    obtenerId(){
        return this.getId();
    }
    obtenerNombre(){
        return this.getNombre();
    }
}