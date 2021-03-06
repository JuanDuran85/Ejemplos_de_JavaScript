// valores primitivos, a estos no se le asignan propiedades

//primitiva
let nombre = "Juan";

//objeto
let name = new String("Juan"); //esto retorna un objeto
console.log(typeof name);

//-----------------------------------------------------------------------------

//escaping
console.log("mensaje con escaping: \"JavaScript\" \\"); 
console.log('mensaje con escaping: \'JavaScript\''); 
console.log('mensaje con escaping: "JavaScript"');
console.log('\n mensaje con escaping: "\\n"');
console.log('\r\n mensaje con escaping: "\\r\\n"');
console.log('\t mensaje con escaping: "\\t"');

//---------------------------------------------------
/* El método padStart() rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado desde el inicio (izquierda) de la cadena actual. */

let mes = "3";
console.log(mes.padStart(2,"0"));
mes = "11";
console.log(mes.padStart(2,"0"));
let numero = "1";
console.log(numero.padEnd(2,"0"));

//------------------------------------------------------------------------

/* El método localeCompare() devuelve un número que indica si la cadena de caracteres actual es anterior, posterior o igual a la cadena pasada como parámetro, en orden lexicográfico.

    -1 if the reference string is sorted before the compareString
    0 if the two strings are equal
    1 if the reference string is sorted after the compareString

*/

console.log("A".localeCompare("z")); //-1
console.log("Z".localeCompare("A")); // 1
console.log("B".localeCompare("B")); // 0

console.log("SalUdOs".toLowerCase().localeCompare("saluDos".toLowerCase()));

//-------------------------------------------------------------------------------

/* Para iterar cadenas se recomienda utilizar el ciclo for...of */

let texto = "JavaScript ⚽";

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}

for (const iterator of texto) {
    console.log(iterator);
};

let texto2 = "VueJS ⚽";
console.log(texto2.substring(0,5));
console.log(texto2.slice(1,5));
console.log(texto2.slice(-5));

let texto3 = "His audiam deserunt in, eum ubique voluptatibus te. In reque dicta usu. Ne rebum"
console.log(texto3.indexOf("deserunt"));
console.log(texto3.indexOf("saludos"));
if (texto3.indexOf("deserunt") > 0) { // -1 para no encontrado
    console.log("Encontrado");
}else{
    console.log("No encontrado");
}

console.log(texto3.includes("voluptatibus"));
console.log(texto3.includes("saludos"));
if (texto3.includes("voluptatibus")) { //retorna true o false
    console.log("Encontrado");
}else{
    console.log("No encontrado");
}


// ------------------------------------------------------------------------

/* El método startsWith() indica si un string inicia con los caracteres de otro string, regresando true o false según sea el caso. */

let enlace = "https://www.google.com/";
if (enlace.startsWith("https://")) {
    console.log("Es un enlace seguro");
} else {
    console.error("No es un enlace seguro");
}

let imagen = "imagen.jpg";

if (imagen.endsWith("jpg")) {
    console.log("Es una imagen");
} else {
    console.error("No es una imagen");
}

//---------------------------------------------------------------------

let palabras = "Expetenda tincidunt in sed, ex partem placerat sea...";

console.log(palabras.split()); // sin separar
console.log(palabras.split("")); // separando caracter por caracter
console.log(palabras.split(" ")); // separando por palabra

let separadas = palabras.split(" ");
console.log(separadas.join(" ")); // une un arreglo en un solo string


// ----------------------------------------------------------------------

let comentarios2 = "Aprendiendo a trabajar con JavaScript utilizando una computadora Acer, una Dell y una HP";

function censurando(texto) {
    let final = texto.split(" ").map(palabra =>{
        return (palabra.includes("Acer") ? "XXXXXX" : palabra);
    })
    return final.join(" ");
};

let resultado2 = censurando(comentarios2);
console.log(resultado2);

//----------------------------------------------------------------------------------------

let comentarios = "Aprendiendo a trabajar con JavaScript utilizando una computadora Acer, una Dell y una HP";

function censurando(texto) {
    let final = texto.split(" ").map(palabra =>{
        if (palabra.includes("Acer")) {
            palabra = "XXXXX"
        } else if(palabra.includes("Dell")){
            palabra = "XXXXX"
        } else if (palabra.includes("HP")){
            palabra = "XXXXX"
        }
        return palabra;
    })
    return final.join(" ");
};

let resultado = censurando(comentarios);
console.log(resultado);

//------------------------------------------------------------
console.log("  Mensaje   ".trim());
console.log("  Mensaje   ".trimStart());
console.log("  Mensaje   ".trimEnd());

console.log("Mensaje".repeat(2));

console.log("Mensaje desde Consola".replace("Consola","JavaScript"));

//----------------------------------------------------------------------------
/* Unicode */
// El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.

function aCodigoUni(caracter) {
    let hexa = caracter.charCodeAt(0).toString(16); //convierte caracter en hexadecimal
    let uni = "\\u" + "0000".substring(0,4 - hexa.length) + hexa; //agrega los 0 faltantes al inicio de la cadena
    return {uni,hexa}
}

let resultado = aCodigoUni("a");
console.log(resultado.hexa);
console.log(resultado.uni);
console.log("\u0061"); // muestra el caracter

//----------------------------------------------------------------------
/* Un conjunto es un conjunto de distintas convinaciones para hacer busqueda de un caracter o un patrón*/

console.log("abcd".match(/[abcd]/)); // el rango especifica que cualquiera de las opciones
console.log("abcd".match(/abcd/));
console.log("b".match(/[abcd]/));
console.log("b".match(/abcd/));

console.log("La direccion con https".match(/(http)|(https)/));

console.log("Hola".match(/H[ol]a/));
console.log("Hola".match(/[a-z]/g));
console.log("913".match(/[0-4]/g));
console.log("-ba".match(/[-a]/));

//------------------------------------------------------------------------

/* 
    \d es igual al rango de [0-9], es decir, cualquier digito
    \w es igual al rango de [a-zA-Z0-9_], representa cualquier digito, cualquier letra o guin bajo
     \d* es igual a cualquier cantidad de digitos a partir de cero
     \S es cualquier caracter que no sea un espacio en blanco
     para asignar un nombre a un grupo se utiliza ?<nombre_grupo>
*/

console.log("123-456-789-".match(/(\d-)*/g));
console.log("123-456-789-".match(/(\d-)+/g));
console.log("correo_correo.correo@correo.com".match(/\S+@\S+/));
console.log("correo_correo.correo@correo.com".match(/(\S+)@\S+/));
console.log("correo_correo@correo.com".match(/(?<usuario>\S+)@\S+/));
console.log("correo_correo@correo.com".match(/(?:\S+)@\S+/)); // grupo que no se recuerde

//---------------------------------------------------------------------------------

/* 
    Cuentificadores:
    * este hace match del elemento anterior cero o mas veces, o cero ocurrencia
    + hacer match del elemento anterior una o mas veces
    {} numero fijo de ocurrencia o para especificar rangos
    ? el elemento anterior puede o no puede estar (opcional)
    . (El punto decimal) coincide con cualquier carácter precedente excepto un carácter de nueva línea
    por defecto los cuantificadores son codiciosos
*/

console.log("3333".match(/\d*/));
console.log("".match(/\d*/));
console.log("".match(/\d+/));
console.log("12345".match(/\d+/));
console.log("12345".match(/\d{3}/));
console.log("81".match(/\d{3,5}/));
console.log("812".match(/\d{3,5}/));
console.log("8129097671".match(/\d{3,5}/));
console.log("https://www.alirafael.com".match(/https?:\/{2}w{3}/));
console.log("<p>Etiqueta P</p>".match(/<.+>/));
console.log("<p>Etiqueta P</p>".match(/<.+?>/)); // el ? cambia el cuantificador de modo codicioso a modo perezoso


//---------------------------------------------------------------------------------

let enlace = "http://alirafael.com/";

console.log(enlace.replace(/(https?:\/{2}(\S+\.)?\S+(\.\S+)(\.\S+)?)/,"Visita: <a href='$1'>$1</a>"));








