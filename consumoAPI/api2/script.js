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
    let todosUserIDs = respuesta.map(datos => datos.userId);
    //console.log(todosUserIDs);
    let userId = new Set(todosUserIDs);
    //console.log(userId);
    let idUser = [...userId];
    //console.log(idUser);

    Promise.all(idUser.map(id => getUser(id))).then(resp => {
        console.log(resp)
        resp.forEach(element => {
            console.log(element.name);
        });
    })

}).catch(error => console.error(error));