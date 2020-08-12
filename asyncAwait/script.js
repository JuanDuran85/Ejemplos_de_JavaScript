const getDatos = async () => {
    const url = 'https://www.feriadosapp.com/api/holidays.json';
    try {
        const response = await fetch(url);   
        const datos = await response.json();
        console.log(datos.data);
    } catch (err) {
        console.log(err);
    }
}

getDatos();