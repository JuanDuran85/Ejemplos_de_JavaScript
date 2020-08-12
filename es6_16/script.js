const Trapecio = function (ladoMayor,ladoMenor,altura){
    this.ladoMayor = ladoMayor;
    this.ladoMenor = ladoMenor;
    this.altura = altura;
};

Trapecio.prototype.calculoArea = function(){
    console.log(this);
    return (((this.ladoMayor + this.ladoMenor)* this.altura)/2);
};

Trapecio.prototype.mostrarThis = function () {
    console.log('el valor de this es: ' + this);
 }

const trapecio1 = new Trapecio(2,5,3);
console.log('El cálculo del área es: ');
console.log(trapecio1.calculoArea());
let mostrandoThis = trapecio1.mostrarThis;
mostrandoThis();
