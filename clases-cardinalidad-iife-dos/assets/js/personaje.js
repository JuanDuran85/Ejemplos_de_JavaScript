export default class Personajes {
    constructor(id,nombre,especie,imagen,genero,origen,locacion,estado){
        let _id = id;
        this.getId = () => _id;

        let _nombre = nombre;
        this.getNombre = () => _nombre;

        let _especie = especie;
        this.getEspecie = () => _especie;

        let _imagen = imagen;
        this.getImagen = () => _imagen;

        this.genero = genero;
        this.origen = origen;
        this.locacion = locacion;
        this.estado = estado;
    }
    obtenerId(){
        return this.getId();
    }
    obtenerNombre(){
        return this.getNombre();
    }
    obtenerEspecie(){
        return this.getEspecie();
    }
    obtenerImagen(){
        return this.getImagen();
    }
}