const recibiendoNumero = (numero) => {
    return {
        incrementar: () =>  ++numero,
        decrementar: () => --numero
    }
}

const resultado = recibiendoNumero(6).decrementar();
console.log(resultado);
