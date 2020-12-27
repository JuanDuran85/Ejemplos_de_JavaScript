// usando Array.from
let frase = "Lenguaje de Programación JS";
let caracteres = Array.from(frase);
console.log(caracteres);

let listado = document.querySelectorAll('li');
console.log(listado);

let listado2 = Array.from(listado);
console.log(listado2);

let textoContanido = listado2.map(element => element.textContent);
console.log(textoContanido);

let listado3 = Array.from(
    listado,
    element => element.textContent
);
console.log(listado3);

//---------------------------------------------------------------
// funciones con Array.from, reduce y arguments

function sumaTotal(num1,num2) {
    console.log(arguments);
    return Array.from(arguments).reduce((a,b)=>a+b,0);
}

console.log(sumaTotal(1,2));

//------------------------------------------------------------------
function sumaTotal2(...args) {
    console.log(args);
    return args.reduce((a,b)=>a+b,0);
}

console.log(sumaTotal2(1,2));

//----------------------------------------------------------------

console.log(Array.of(2,4,6,87,4,2,4));
console.log(Array.of(2,4,6,87,4,2,4).includes(2));
console.log(Array.of(2,4,6,87,4,2,4).includes(10));