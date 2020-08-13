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

async function mostrarDatos() {
    let respuesta = await fetch('https://api.github.com/users/JuanDuran85/repos');
    let repositorios = await respuesta.json();
    console.log(repositorios);
}

mostrarDatos();

//-----------------------------------------------------------------------

async function mostrarDatos2() {
    try {
        let respuesta = await fetch('https://api.github.com/users/JuanDuran85/repo');
        let repositorios = await respuesta.json();
        console.log(repositorios);
    } catch (error) {
        console.error(error);
    }
}

mostrarDatos2();