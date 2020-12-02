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
                        <img src="${personaje.obtenerImagen()}" class="img-fluid" alt="${personaje.obtenerId()}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.obtenerNombre()}</h5>
                            <p class="card-text">Especie: ${personaje.obtenerEspecie()}</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${personaje.obtenerId()}">Ver Personaje</button>
                        </div>
                    </div>
                </div>
            `;
        });
    };
    modalPersonajes(){
        this.personajes.forEach(personaje => {
            modales.innerHTML += `
                <div class="modal fade" id="modal-${personaje.obtenerId()}" tabindex="-1" aria-labelledby="modalLebel-${personaje.obtenerId()}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLebel-${personaje.obtenerId()}">${personaje.obtenerNombre()}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li>Especie: ${personaje.obtenerEspecie()}</li>
                            <li>Genero: ${personaje.genero}</li>
                            <li>Origen: ${personaje.origen}</li>
                            <li>Locación: ${personaje.locacion}</li>
                            <li>Especie: ${personaje.estado}</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
                </div>
            `;
        })
    }
};