"use strict";

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log("".concat(j, " x ").concat(i, "  = ").concat(j * i));
  }

  ;
}

;
var num = 5;

var cuadrado = function cuadrado(num) {
  var resultado = Math.pow(num, 2);
  return resultado;
};

console.log("El cuadrado del n\xFAmero ".concat(num, " es: ").concat(cuadrado(num)));