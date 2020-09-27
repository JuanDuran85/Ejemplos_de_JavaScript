import DetallesPersonajes from './detallesPersonajes.js';

let llamadoPersonajes = (()=>{

    const urlAPI = 'https://rickandmortyapi.com/api/character/';
    const resultados = document.querySelector('.resultados');

    let obtenerPersonaje = async () => {
        try {
            let respuesta = await fetch(urlAPI);
            let datos = await respuesta.json();
            return datos;
        } catch (error) {
            console.error(error);
        }
    }

    let llamandoDetalle = async (idPersonaje) => {
        try {
            let respuesta = await fetch(urlAPI+idPersonaje);
            let data = await respuesta.json();
            const {id,name, gender, species, status } = data;
            const infoPersonaje = new DetallesPersonajes(id,name, gender, species, status);
            let detallePersonaje = document.querySelector(`#person-${idPersonaje}`);
            let detalle = `
                <ul>
                    <li><span>${infoPersonaje.id}</span></li>
                    <li><span>${infoPersonaje.name}</span></li>
                    <li><span>${infoPersonaje._gender}</span></li>
                    <li><span>${infoPersonaje._species}</span></li>
                </ul>
            `;
            detallePersonaje.innerHTML = detalle;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        mostrando: async () => {
            const personajes = await obtenerPersonaje();
            const respuestaPersonajes = await personajes.results;
            respuestaPersonajes.forEach(element => {
                resultados.innerHTML += `
                    <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <img src="${element.image}" alt="${element.id}" class="img-fluid">
                        <div class="d-inline-block detallePersona" id="person-${element.id}">
                            ${llamandoDetalle(element.id)}
                        </div>
                    </div>
                `;
            });
        },
    }
})();

llamadoPersonajes.mostrando();

