export default class Serie {
    constructor(nombre,personajes){
        this.nombre = nombre;
        this.personajes = personajes || [];
    }
    agregarPersonajes(personajes){
        this.personajes.push(personajes);
    }
    getPersonajes(){
       this.personajes.forEach(personaje => {
            resultados.innerHTML += `
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-3">
                    <div class="card">
                        <img src="${personaje.imagen}" class="img-fluid" alt="${personaje.obtenerId()}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.obtenerNombre()}</h5>
                            <p class="card-text">Especie: ${personaje.especie}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };
};