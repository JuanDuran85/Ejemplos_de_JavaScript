/* Expresiones regulares */

/* El método search() ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama. Retorna la posicion de la ocurrencia que se pasa, de lo contrario retorna -1*/

let texto = "Vis 1 id minim dicant sensibus. Pri aliquip conclusionemque ad, ad malis evertitur torquatos his. Has ei solum harum reprimique, id illum saperet tractatos his. Ei omnis soleat antiopam quo. Ad augue inani postulant mel, mel ea qualisque forensibus.";

console.log(texto.search(/quo/));
console.log(texto.search(/\d/)); // \d para caracteres numericos

// ------------------------------------------------------------------

/* El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena. Este método retorna un arreglo. Tambien depende de la bandera "g" para ampliar la busqueda en la cadena, de lo contrario retorna la primera coincidencia*/

let texto2 = "Vis 1 id minim dicant sensibus. Pri aliquip conclusionemque ad, ad malis evertitur torquatos his. Has ei solum 34 harum reprimique, id illum saperet tractatos his. Ei omnis soleat antiopam 65 quo.";

console.log(texto2.match(/quo/));
console.log(texto2.match(/\d/));
console.log(texto2.match(/\d/g));
console.log(texto2.match(/\d+/g)); // con el + se retorna uno o mas caracteres que coinciden con la expresion regular consecutivos.

//--------------------------------------------------------------------------------

/* El método [@@ matchAll] devuelve todas las coincidencias de la expresión regular con una cadena. Retorna un objeto iterador */

let texto3 = "Lorem 20 salutandi eu mea, eam in 1 soleat iriure assentior. 34 Tamquam lobortis id qui...";
let resultado = texto3.matchAll(/\d+/g);

for (const iterator of resultado) {
    console.log(iterator);
}

//---------------------------------------------------------------------------------

let texto4 = "El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.";

console.log(texto4.replace(/patrón/,"Expresion Regular"));
console.log(texto4.replace(/patrón/g,"Expresion Regular")); // con la bandera global remplaza todas las coincidencias
console.log(texto4.replace("patrón","Expresion Regular"));

let texto5 = "El método replaceAll () devuelve una nueva cadena con todas las coincidencias de un patrón reemplazadas por un reemplazo. El patrón puede ser una cadena o una expresión regular, y el reemplazo puede ser una cadena o una función que se llamará para cada coincidencia.";
let resultado2 = texto5.replaceAll("patrón","Expresión");
console.log(resultado2);

let texto6 = "1000 personas en un pueblo con 4000 metros cuadrados";
console.log(texto6.replaceAll(/(\d)(\d{3})/g,"$1.$2"));
console.log(texto6.replaceAll(/(\d)(\d{3})/g,function(match, g1, g2, offset, cadena) {
    console.log(match , g1, g2, offset, cadena);
    return g1 + "." + g2;
}));