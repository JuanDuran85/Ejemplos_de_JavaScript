const baseUrl = 'https://rickandmortyapi.com/api';

const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}

const getLocations = async (id) => {
    const url = `${baseUrl}/location/${id}`;
    return request(url);
}

const getUser = async (id) => {
    const url = `${baseUrl}/character/${id}`;
    return request(url);
}

const userId = 1;
Promise.all([getUser(userId), getLocations(userId)])
    .then(resp => {
        console.log('resp', resp)
    })
    .catch(err => console.log('err', err))
