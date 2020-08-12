const notas = (arreglo,callback)=>callback(arreglo);

const separar = (arreglo) => {
    let par = [];
    let impar = [];

    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] % 2 == 0) {
            par.push(arreglo[index]);
        } else {
            impar.push(arreglo[index]);
        }
    };
    return {par, impar}
};

let arreglo = [3,12,7,1,2,9,18];
console.log(notas(arreglo,separar));