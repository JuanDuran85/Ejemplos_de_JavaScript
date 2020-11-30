export default class Personajes {
    constructor(id,nombre,especie,imagen){
        let _id = id;
        this.getId = () => _id;

        let _nombre = nombre;
        this.getNombre = () => _nombre;

        let _especie = especie;
        this.getEspecie = () => _especie;

        let _imagen = imagen;
        this.getImagen = () => _imagen;
    }
    getId(){
        return this.getId();
    }
    getNombre(){
        return this.getNombre();
    }
    getEspecie(){
        return this.getEspecie();
    }
    getImagen(){
        return this.getImagen();
    }
}