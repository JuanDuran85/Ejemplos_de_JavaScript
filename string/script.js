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

