const setTexto = datos => {
    contenido.textContent = datos;
};

//simular que se obtiene información de una API
const getData = () => {
    return new Promise((resolve,reject)=>{
        setTexto('Solicitando Autorización');
        setTimeout(()=>{
            resolve(true); //se ejecuta resolve en vez del callback(funcion) anterior
        },2500);
    });
};

const mostrarData = () => {
    return new Promise((resolve,reject)=> {
        setTexto('Esperando la información');
        setTimeout(()=>{
            resolve({nombre:"El usuario en linea es: Juan"});
        },2500);
    });
};

boton.addEventListener('click',()=>{
    getData().then(autorizar => {
        if(autorizar){
            return mostrarData();
        };
    }).then(usuario => {
        setTexto(usuario.nombre);
    });; //en then recibe como argumento la respuesta de datos
});