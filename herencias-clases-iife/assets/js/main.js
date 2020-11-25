import Personajes from './personajes.js';

let llamadoPersonajes = (()=>{

    const urlAPI = 'https://rickandmortyapi.com/api';
    let instanciPersonaje;
    let numeroPersonajes;

    let obtenerPersonaje = async (url) => {
        try {
            let respuesta = await fetch(url);
            let datosPersonajes = await respuesta.json();
            return datosPersonajes;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        infoPersonajes: async () => {
            const personajes = await obtenerPersonaje(`${urlAPI}/character`);
            numeroPersonajes = personajes.results.length;
            personajes.results.forEach(element => {
                instanciPersonaje = new Personajes(element.id,element.name, element.species, element.image);
                resultados.innerHTML += instanciPersonaje.infoGeneral();
            });
        },
        nPersonajes: async () => {
            let cantidadPersonajes = document.querySelector("#cantidadPersonajes");
            let spinnerBorder = document.querySelector(".spinner-border");
            spinnerBorder.remove();
            cantidadPersonajes.innerHTML = numeroPersonajes;
        }
    }
})();

llamadoPersonajes.infoPersonajes();

setTimeout(()=>{
    llamadoPersonajes.nPersonajes();
},2000);

