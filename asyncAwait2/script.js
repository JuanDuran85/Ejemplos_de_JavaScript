const getDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);   
        const datos = await response.json();
        console.log(datos);
        datos.forEach(element => {
            if (element.id < 20) {
                console.log(element.title);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const mensajeInterno = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve('Información Enviada') }, 3000);
    })
 
}
 
const getData = async () => {
    const resp = await mensajeInterno();
    console.log(resp)
}

getDatos(); 
getMensaje();
