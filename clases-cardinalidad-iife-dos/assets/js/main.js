import Serie from './serie.js';
import Personaje from './personaje.js';

let llamadoPersonajes = (()=>{

    const urlAPI = 'https://rickandmortyapi.com/api';
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
        personajes: async (nombre) => {
            let serieRyM = new Serie(nombre);
            let personajes = await obtenerPersonaje(`${urlAPI}/character`);
            numeroPersonajes = personajes.results.length;
            
            personajes.results.forEach((element) => {
                let instanciaPersonaje = new Personaje(element.id,element.name, element.species, element.image, element.gender, element.origin.name, element.location.name, element.status);
                serieRyM.agregarPersonajes(instanciaPersonaje);
            });
            
            serieRyM.getPersonajes();
            serieRyM.modalPersonajes();
        },
        nPersonajes: async () => {
            let cantidadPersonajes = document.querySelector("#cantidadPersonajes");
            let spinnerBorder = document.querySelector(".spinner-border");
            spinnerBorder.remove();
            cantidadPersonajes.innerHTML = numeroPersonajes;
        },
    }
})();

llamadoPersonajes.personajes("Rick and Morty");

setTimeout(()=>{
    llamadoPersonajes.nPersonajes();
},2000)