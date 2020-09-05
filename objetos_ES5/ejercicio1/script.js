/* 
1) Traspasa el siguiente objeto a su notación literal y utiliza console.log para verificar el resultado. 

var notebook = new Object();
myCar.make = 'Dell';
myCar.processor = 'I7';
*/
var notebook = {make: 'Dell', processor: 'I7'};
console.log(notebook);

/* 
2) Utilizando la sintaxis objeto.propiedad modifica el procesador del notebook por “I9”
3) Utilizando la sintaxis objeto['propiedad'] modifica la marca del computador por “HP”.
*/

notebook.processor = 'I9';
notebook['make'] = 'HP';
console.log(notebook);

/* 
4) Utilizando la sintaxis new Object, crea el objeto estudiante con las propiedades nombre y edad, siendo los valores “Juan” y “35” respectivamente para cada propiedad. 
*/

var estudiante = new Object();
estudiante.nombre = "Juan";
estudiante.edad = 35;
console.log(estudiante);