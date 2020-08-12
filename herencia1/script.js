class Animal {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
};

class Perro extends Animal {
    constructor(name, distance) {
        super(name);
        this._distance = distance;
    }
    get distance() {
        return this._distance;
    }
};

class Conejo extends Animal {
    constructor(name, distance) {
        super(name);
        this._distance = distance;
    }
    get distance() {
        return this._distance;
    }
};

class Gato extends Animal {
    constructor(name, distance) {
        super(name);
        this._distance = distance;
    }
    get distance() {
        return this._distance;
    }
};

let perrito = new Perro('Taty', '30');
let conejito = new Conejo('Laica', '67');
let gatico = new Gato('Kittie', '12');

console.log(perrito.name);
console.log(perrito.distance);
console.log(conejito.name);
console.log(conejito.distance);
console.log(gatico.name);
console.log(gatico.distance);