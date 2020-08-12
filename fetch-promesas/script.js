fetch('https://swapi.dev/api/people/')
   .then(response => response.json())
   .then(json => console.log(json.results))