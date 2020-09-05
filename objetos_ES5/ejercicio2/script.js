/* 
5) Traspasa el siguiente objeto a su notación literal 


var gato = new Object();
gato.sonido = function (){
  console.log("miau");
};
gato.sonido();

*/

var gato = {
    sonido: function (){
        console.log("miau");
    }
};
gato.sonido();