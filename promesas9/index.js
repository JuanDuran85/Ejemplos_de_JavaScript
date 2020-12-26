// trabajando con promesas.

let comidas = new Promise((resolve, reject) => {
    resolve("Todo bien");
    //reject(Error("Error en todo"));
});

comidas.then(result => console.log(result)).catch(error => console.log(error)).finally(()=>console.log("proceso finalizado"));

// -------------------------------------------------------
//varia promesas

const compras = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            done: true,
            cID: 45433434
        })
    },2000);
});

const trasnporte = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            envio: 33434,
            distancia: 100,
        })
    }, 3000);
})

function pedido() {
    compras
        .then(result => {
            console.log(result);
            return trasnporte;
        })
        .then(data =>{
            let {envio,distancia} = data;
            console.log(`El envio es: ${envio} y la distancia es de: ${distancia} kilometros`);
        })
        .catch(error => console.log(error))
        .finally(()=>console.log("Finalizado"));
};

pedido();