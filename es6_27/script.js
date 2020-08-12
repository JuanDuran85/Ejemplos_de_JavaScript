const recibiendoNumeros = (a, b) => {
    const unNumero = 100;
    return {
        restaNum: (c) =>  c - 1,
        sumaNum: () => a + b,
        unNumero
    }
}

const unNumeroNuevo = recibiendoNumeros().unNumero;
console.log(unNumeroNuevo);
 
/* const restando = recibiendoNumeros(6, 8).restaNum(34);
console.log(restando); */
