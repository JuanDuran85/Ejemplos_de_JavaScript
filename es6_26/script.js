/* const Animales = {};
Animales.comer = true;
const Perro = Object.create(Animales);
Perro.sonido = true;
const BullDog = Object.create(Perro);
BullDog.ladra = true;
console.log(BullDog.ladra);
console.log(BullDog.sonido);
console.log(BullDog.comer);
console.log(BullDog.toString());
console.log(Object.getPrototypeOf(BullDog));
console.log(Object.getPrototypeOf(Perro));
console.log(Object.getPrototypeOf(Animales)); */

class Figura {
    constructor(x, y) {
        this._posiciónX = x;
        this._posicionY = y;
    }
}

class Circulo extends Figura {
    constructor(x, y, radio) {
        super(x, y);
        this._radio = radio
    }
 }

 const circulo = new Circulo(1,2,3);

 console.log(Object.getPrototypeOf(circulo));