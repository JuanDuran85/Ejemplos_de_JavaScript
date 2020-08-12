export default class Circunferencia {
    constructor(radio) {
        this.radio = radio;
    }

    area(){
        return (Math.PI * Math.pow(this.radio,2));
    }

    perimetro(){
        return (2 * Math.PI * this.radio);
    }
}