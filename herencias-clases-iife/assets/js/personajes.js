export default class Personajes {
    constructor(id,nombre,especie,imagen){
        let _id = id;
        this.getId = () => _id;
        this.setId = (nuevo_id) => _id = nuevo_id;

        let _nombre = nombre;
        this.getNombre = () => _nombre;
        this.setNombre = (nuevo_nombre) => _nombre = nuevo_nombre;

        let _especie = especie;
        this.getEspecie = () => _especie;
        this.setEspecie = (nuevo_especie) => _especie = nuevo_especie;

        let _imagen = imagen;
        this.getImagen = () => _imagen;
        this.setImagen = (nuevo_imagen) => _imagen = nuevo_imagen;
    }
    get id(){
        return this.getId();
    }
    set id(nuevo_id){
        this.setId(nuevo_id);
    }
    get nombre(){
        return this.getNombre();
    }
    set nombre(nuevo_nombre){
        this.setNombre(nuevo_nombre);
    }
    get especie(){
        return this.getEspecie();
    }
    set especie(nuevo_especie){
        this.setEspecie(nuevo_especie);
    }
    get imagen(){
        return this.getImagen();
    }
    set imagen(nuevo_imagen){
        this.setImagen(nuevo_imagen);
    }
    infoGeneral(){
        return `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-3">
                <div class="card">
                    <img src="${this.imagen}" class="img-fluid" alt="${this.id}">
                    <div class="card-body">
                        <h5 class="card-title">${this.nombre}</h5>
                        <p class="card-text">Especie: ${this.especie}</p>
                    </div>
                </div>
            </div>
        `;
    };
}