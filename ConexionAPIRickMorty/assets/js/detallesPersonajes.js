import Personajes from './personajes.js';

export default class DetallesPersonajes extends Personajes {
    constructor(id,name, status, species, gender, created, origin, location, episode){
        super(id);

        let _name = name;
        this.getName = () => _name;
        this.setName = (nuevo_name) => _name = nuevo_name;

        let _status = status;
        this.getStatus = () => _status;
        this.setStatus = (nuevo_status) => _status = nuevo_status;

        let _species = species;
        this.getSpecies = () => _species;
        this.setSpecies = (nuevo_species) => _species = nuevo_species;

        let _gender = gender;
        this.getGender = () => _gender;
        this.setGender = (nuevo_gender) => _gender = nuevo_gender;

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
    get status(){
        return this.getStatus();
    }
    set status(nuevo_status){
        this.setStatus(nuevo_status);
    }
    get species(){
        return this.getSpecies();
    }
    set species(nuevo_species){
        this.setSpecies(nuevo_species);
    }
    get gender(){
        return this.getGender();
    }
    set gender(nuevo_gender){
        this.setGender(nuevo_gender);
    }

    infoModal(){
        return `
            <ul>
                <li><span>ID: ${this.id}</span></li>
                <li><span>Nombre: ${this.name}</span></li>
                <li><span>Género: ${this.gender}</span></li>
                <li><span>Especie: ${this.species}</span></li>
                <li><span>Status: ${this.status}</span></li>
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
                <li><span>${this.species}</span></li>
            </ul>
        `
    }
}