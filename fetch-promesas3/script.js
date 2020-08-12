const baseUrl = 'http://demo.wp-api.org/wp-json/wp/v2';

const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}

const getPosts = async () => {
    const url = `${baseUrl}/posts`;
    return request(url);
}

const getUser = async (id) => {
    const url = `${baseUrl}/users/${id}`;
    return request(url);
}

getPosts().then(posts => {
    const autorIds = posts.map(p => p.author);
    const setOfUsers = new Set(autorIds);
    const users = [...setOfUsers];  
    Promise.all(users.map(userId => getUser(userId)))
    .then(response => console.log(response))
 });