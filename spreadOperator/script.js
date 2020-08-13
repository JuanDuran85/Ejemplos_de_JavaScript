let numeros = [3,5,-2];

function suma(n1,n2,n3) {
    return n1+n2+n3;
}

let resultado = suma.apply(this,numeros);
console.log(resultado);
let resultado2 = suma(...numeros); //aplicando spread operator
console.log(resultado2);

// -----------------------------------------------------------------

let arreglo1 = ['numero 1', 'numero 2'];
let arreglo2 = ['2',4,6,true,false];

console.log([...arreglo1, ...arreglo2]);
console.log(['null',...arreglo2, {objeto: true}]);

// -----------------------------------------------------------------

let obj1 = {
    nombre: "Juan",
    edad: 35
}

let obj2 = {
    apellido: "Duran",
    pais: "Venezuela"
}

let nuevoObjeto = {
    ...obj1,
    ...obj2
}

console.log(nuevoObjeto);