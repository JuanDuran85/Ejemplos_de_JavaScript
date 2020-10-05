fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(datos => {
        console.log(datos)
        datos.forEach(element => {
            resultado.innerHTML += `
            <tr>
                <th>${element.id}</p></th>
                <td>${element.userId}</p></td>
                <td>${element.title}</p></td>
                <td>${element.body}</td>
            </tr>
          `;
        });
    })
    .catch(error => console.error(error));