let nombre = "Juan";
let color = "Morado";
let ciudad = "Santiago de Chile";
let lenguaje = "JavaScript";

const persona = {
    nombre, 
    color,
    ciudad,
    lenguaje,
    ["CodPost-"+ciudad] : 750000,
    [color+"fav"]: "azul",
    saludar(){
        console.log(`Mensaje desde metodo saludar en objeto persona con el nombre ${this.nombre}`);
    }
};

console.log(persona);

// object values retorna un arreglo con las propiedades numerables del objeto
console.log(Object.values(persona));

//usando spred
const [nombre2, color2, ciudad2, lenguaje2] = Object.values(persona);
console.log(nombre2, color2, ciudad2, lenguaje2);

// object entries retorna los valores y propiedades en arreglo de un objeto
console.log(Object.entries(persona));

// usando object entries y forEach
Object.entries(persona).forEach(([key,value]) => {
    console.log(`${key} : ${value}`);
});
