function calcular() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,500,5);
    })
}

function calcularDos() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,300,"segunda promesa");
    })
}

calcular().then(calcularDos).then(respuesta => console.log(respuesta));