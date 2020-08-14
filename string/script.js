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



