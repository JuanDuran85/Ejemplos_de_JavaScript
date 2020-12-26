function tiempo() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Buen tiempo para caminar."),2000);
    });
};

function trafico() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Poco trafico en la via"),2000);
    });
};

async function planesViaje() {
    try {
        let clima = tiempo();
        let viaje = trafico();
        let final = await Promise.all([clima,viaje]);
        return final;
    } catch (error) {
        throw Error(error);
    }
}

planesViaje().then(result => console.log(result)).catch(err => console.log(err));