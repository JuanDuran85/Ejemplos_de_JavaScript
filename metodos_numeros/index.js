let num1 = 435.657;
console.log(Math.trunc(num1));
console.log(parseInt(num1));

let num2 = 1687754312121212121212121212.5;
console.log(num2.toString());
console.log(parseInt(num2));

//------------------------------------------------------------------------
// metodos para trabajar con numeros

//Number.isNaN()

let valor = undefined + 1;
console.log(valor);
console.log(Number.isNaN(valor));
console.log(isNaN(valor)); // metodo global que puede generar errores en las comparaciones

valor = "NaN";
console.log(valor);
console.log(Number.isNaN(valor));
console.log(isNaN(valor)); // metodo global que puede generar errores en las comparaciones

//----------------------------------------------------------------------
// metodo Number.isInteger

let entero = 10;
console.log(Number.isInteger(entero));

entero = 10.0;
console.log(Number.isInteger(entero));

entero = 10.345567;
console.log(Number.isInteger(entero));

// ----------------------------------------------------------------------------
// metodo Number.isFinite

let numero = 21;
console.log(Number.isFinite(numero));
console.log(isFinite(numero));

numero = "203";
console.log(Number.isFinite(numero));
console.log(isFinite(numero)); // el metodo global convierte a numero
