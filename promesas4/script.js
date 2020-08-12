const aleatorio = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let numAleatorio = Math.floor(Math.random()*100);
            resolve(numAleatorio);
        },1000);
    });
};

aleatorio().then(resultado => {
    if(resultado >= 20 && resultado <= 60){
        console.log(` ${resultado}`)
    }else {
        console.log(`El resultado: ${resultado} no se encuentra entre los numeros 20 y 60`);
    };
})