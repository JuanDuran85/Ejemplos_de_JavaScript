let numeros = [[1,2,3],[5,8,13],[21,34,55]];

let promedio = numeros.map((valor)=>{
    let suma = valor.reduce((total,valor)=>total+valor);
    return (suma/numeros.length)
})

console.log(`El promedio de cada arreglo es: ${promedio}`);

let sumaPromedio = promedio.reduce((total,valor)=>total+valor);
console.log(`El promedio total es: ${sumaPromedio/promedio.length}`);