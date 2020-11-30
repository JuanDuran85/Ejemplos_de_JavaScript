let obtenerPersonaje = async (url) => {
    try {
        let respuesta = await fetch(url);
        let datosPersonajes = await respuesta.json();
        return datosPersonajes;
    } catch (error) {
        console.error(error);
    }
};

obtenerPersonaje("https://www.cheapshark.com/api/1.0/stores")
    .then(resp => console.log(resp));
obtenerPersonaje("https://www.cheapshark.com/api/1.0/deals")
    .then(resp => console.log(resp));
obtenerPersonaje("https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0")
    .then(resp => console.log(resp));