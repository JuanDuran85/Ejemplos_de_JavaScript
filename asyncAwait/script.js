( async function() {
    
    let numero1 = await new Promise((resolve,reject)=>{
        setTimeout(resolve,500,25);
    });
    let numero2 = await new Promise((resolve,reject)=>{
        setTimeout(resolve,500,10);
    });

    let suma = numero1 + numero2;
    console.log(suma);
})();


//---------------------------------------------------------------------
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

//-----------------------------------------------------------------------
