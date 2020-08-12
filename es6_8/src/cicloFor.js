for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(`${j} x ${i}  = ${j*i}`);
    }
}

let num = 5;
console.log(`El cuadrado del número ${num} es: ${cuadrado(num)}`);

function cuadrado (num) {
    let resultado = Math.pow(num,2);
    return resultado;
}