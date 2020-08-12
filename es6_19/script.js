var A = [1, 2, 3, 4], B = [];

for (var i = 0; i < A.length; i++) {
   B.push(sumarDos(A[i]));
};

function sumarDos(x) {
   return x + 2;
};

console.log(B)

//------------------------------

var valores = [1,2,3,5,8,13];
var resultado = [];

for (let i = 0; i < valores.length; i++) {
    resultado.push(cuadratica(valores[i]));
};

function cuadratica(x){
    return Math.pow(x,2)-2
};

console.log(resultado);