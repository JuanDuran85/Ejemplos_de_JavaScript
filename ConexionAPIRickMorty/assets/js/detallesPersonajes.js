import Personajes from './personajes.js';

export default class DetallesPersonajes extends Personajes {
    constructor(id,name, gender, species, status){
        super(id);
        let _name = name;
        this.getName = () => _name;
        this.setName = (nuevo_name) => _name = nuevo_name;
        this._gender = gender;
        this._species = species;
        this._status = status;
    }

    get name(){
        return this.getName();
    }

    set name(nuevo_name){
        this.setName(nuevo_name);
    }
}