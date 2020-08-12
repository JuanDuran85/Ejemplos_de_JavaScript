export default class Triangulo {
    constructor(base,altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return (this.base * this.altura)/2;
    }

    calcularPerimetro(){
        let hipo = (Math.sqrt(Math.pow(this.base,2)+Math.pow(this.altura,2)));
        return (this.base + this.altura + hipo);
    }
}