function calcular() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1500,5);
    })
}

function calcularDos(numero) {
    console.log(numero)
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1300,"segunda promesa");
    })
}

calcular().then(calcularDos).then(respuesta => console.log(respuesta));