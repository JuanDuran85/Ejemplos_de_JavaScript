const URL_BASE = 'https://jsonplaceholder.typicode.com';

let request = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

let getPost = async () => {
    let urlPost = `${URL_BASE}/posts`;
    return request(urlPost);
}

let getUser = async (id) => {
    let urlId = `${URL_BASE}/users/${id}`;
    return request(urlId);
}

getPost().then(respuesta => {
    //console.log(respuesta);

    respuesta.forEach(element => {
        resultado.innerHTML += `
        <tr>
            <th>${element.id}</p></th>
            <td>${element.userId}</p></td>
            <td>${element.title}</p></td>
            <td>${element.body}</td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#usuario-${element.userId}">+</button></td>
        </tr>
      `;
    });

    let todosUserIDs = respuesta.map(datos => datos.userId);
    //console.log(todosUserIDs);
    let userId = new Set(todosUserIDs);
    //console.log(userId);
    let idUser = [...userId];
    //console.log(idUser);
    
    //idUser.map(id => getUser(id).then(rep => console.log(rep)));

    Promise.all(idUser.map(id => getUser(id))).then(resp => {
        //console.log(resp)
        resp.forEach(element => {
            resultado.innerHTML += `
            <div class="modal fade" id="usuario-${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Nombre: ${element.name}</p>
                        <p>Nombre de Usuario: ${element.username}</p>
                        <p>Correo Electróinico: ${element.email}</p>
                        <p>Ciudad: ${element.address.city}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        `;
        });
    })

}).catch(error => console.error(error));
