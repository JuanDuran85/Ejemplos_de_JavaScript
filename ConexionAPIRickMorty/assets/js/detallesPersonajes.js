import Personajes from './personajes.js';

export default class DetallesPersonajes extends Personajes {
    constructor(id,name, status, species, gender, created, origin, location, episode){
        super(id);
        let _name = name;
        this.getName = () => _name;
        this.setName = (nuevo_name) => _name = nuevo_name;
        this._status = status;
        this._species = species;
        this._gender = gender;
        this._created = created;
        this._origin = origin;
        this._location = location;
        this._episode = episode;
    }

    get name(){
        return this.getName();
    }

    set name(nuevo_name){
        this.setName(nuevo_name);
    }

    infoModal(){
        return `
            <ul>
                <li><span>ID: ${this.id}</span></li>
                <li><span>Nombre: ${this.name}</span></li>
                <li><span>Genero: ${this._gender}</span></li>
                <li><span>Especie: ${this._species}</span></li>
                <li><span>Status: ${this._status}</span></li>
                <li><span>Creado: ${this._created}</span></li>
                <li><span>Origen: ${this._origin.name}</span></li>
                <li><span>Cantidad de Episodios: ${this._episode.length}</span></li>
            </ul>
        `
    }
    
    infoGeneral(){
        return `
            <ul>
                <li><span>${this.id}</span></li>
            </ul>
        `
    }
}