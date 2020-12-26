// spread expande valores ya sean string o arreglos donde se esperan argumenos o elementos. mostrando expandido o de forma individual cada elemento o cadena de caracteres

const numeros = [2,4,6,67,3,2,45];
console.log(...numeros);

const texto = "Utilizando Spread Operator en JS";
console.log(...texto);

//-------------------------------------------------------------------------
// pasar arreglos como argumentos

function sumando(a,b,c,d,e,f,g) {
    return a+b+c+d+e+f+g;
};
//usando apply
console.log(sumando.apply(null,numeros));
// usando spread
console.log(sumando(...numeros));

//---------------------------------------------------------------------------------
// clonar arreglos y objetos

const numerosCopia = [...numeros];
console.log(numerosCopia);
numeros.push(-2);
console.log(numeros, numerosCopia);

const datos = {
    nombre: "Juan",
    pais: "Chile"
};
const copiaDatos = {...datos};
console.log(copiaDatos);

// fucionar arreglos y objetos

const preferencias = {
    lenguaje: "JavaScript",
    editor: "Visual Studio Code"
};
const datosPersona = {...datos, ...preferencias};
console.log(datosPersona);

// --------------------------------------------------------------------------
//REST
//rest representa un numero infinito como argumenos como arreglo

function sumando2(...params) {
    return params.reduce((a,b)=>{
        return a+b
    },0);
};

// se puede usar spread varias veces
const numeros2 = [1,2,3,4,5,6];
console.log(sumando2(...numeros, ...[-5], ...numeros2, 1,-4,-2,3));

//-------------------------------------------------------------------------