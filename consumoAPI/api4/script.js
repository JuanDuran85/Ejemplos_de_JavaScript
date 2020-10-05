fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(datos => {
        let datosPersonajes = datos.results;
        datosPersonajes.forEach(element => {
            let fecha = new Date(element.created);
            resultado.innerHTML += `
            <div class="my-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card mx-2">
                <img src="${element.image}" class="card-img-top" alt="${element.name}">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <div class="card-text">
                        <ul>
                            <li>Status: ${element.status}</li>
                            <li>Species: ${element.species}</li>
                            <li>Type: ${element.type ? element.type : 'Vacio'}</li>
                            <li>Location: ${element.location.name}</li>
                            <li>Created: ${fecha.getDate()<10 ? "0"+fecha.getDate() : fecha.getDate() }/${fecha.getMonth()}/${fecha.getFullYear()}</li>
                            <li>Episode: ${element.episode.length}</li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
          `;
        });
    })
    .catch(error => console.error(error));