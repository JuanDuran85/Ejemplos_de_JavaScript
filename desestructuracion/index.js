//---------------------------------------------------------------------
const aprender = ['JavaScript','VueJS', 'ReactJS', 'AngularJS'];
// desesctructurar arreglos
let [js,vue,react,angular] = aprender;
console.log(js, vue, react, angular);

let direccion = "52774 Ebert Mission, 87199-9809, West Elodyburgh, Idaho, EUA";
// desesctructurar arreglos
let [calle, numero, ciudad, estado, pais] = direccion.split(',');
console.log(calle, numero, ciudad, estado, pais);

//---------------------------------------------------------------------
const perro = {
    nombre: 'kitty',
    raza: 'pastor aleman',
    color: 'marron, negro y blanco',
    edad: 5,
    hija: {
        nombre: 'taty',
        raza: 'pastor aleman',
        color: 'marron y negro'
    }
};
// desesctructurar objetos
let {nombre, raza, color, edad} = perro;
console.log(nombre,raza,color,edad);
let {nombre:nombreHija, edad:edadHija = "desconocido", color:colorHija} = perro.hija;
console.log(nombreHija, edadHija, colorHija);

//---------------------------------------------------------------------

function saludar({saludo = "Hola", nombre = "Juan", momento = "noche"}) {
    console.log(`${saludo} ${nombre}, feliz ${momento}`);
};

saludar({});
saludar({saludo: "hola",nombre: "jose", momento: "tarde"});



//---------------------------------------------------------------------