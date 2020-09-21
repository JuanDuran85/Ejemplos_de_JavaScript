const baseUrl = 'https://jsonplaceholder.typicode.com';

const request = async (url) => {
   const results = await fetch(url)
   const response = await results.json()
   return response;
}

const getUser = async (id) => {
   const url = `${baseUrl}/users/${id}`;
   return request(url);
}

const getPosts = async (id) => {
   const url = `${baseUrl}/posts?userId=${id}`;
   return request(url);
}

const userId = 1;

Promise.all([getUser(userId), getPosts(userId)])
   .then(resp => {
       const posts = resp[1];
       const user = resp[0];
      
       const name = user.name;
       const address = user.address;
       const email = user.email;
       const city = address.city;
      
       console.log('name', name)
       console.log('address', address.suite, address.street)
       console.log('geo', `${address.geo.lat},${address.geo.lng}`)
       console.log('email', email)
       console.log('city', city)
      
       console.log('')
      
       posts.forEach(element => {
           const title = element.title;
           const body = element.body;

           console.log('title', title)   
           console.log('body', body)   
       });
   })
   .catch(err => console.log('err', err));