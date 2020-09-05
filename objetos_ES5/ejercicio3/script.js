/* 
6) Utilizando la sintaxis new Object crea el objeto con el nombre de estudiante, agregando el método hablar que muestre en pantalla "Estoy aprendiendo objetos con JS".
*/

var estudiante = new Object();

estudiante.hablar = function (){
  console.log("Estoy aprendiendo objetos con JS");
};

estudiante.hablar();

/* 
7) Partiendo del código explicado anteriormente, crea una segunda propiedad llamada edad, asigna un valor a esta y que al llamar al método saludar se muestra en la consola el siguiente mensaje: "Hola soy Camila y tengo 30 años".
*/

var persona = new Object();
persona.nombre = "Camila";
persona.edad = 30;
persona.saludar = function(){
    console.log("Hola soy " + this.nombre + " y tengo " + this.edad);
};
persona.saludar(); 

/*
8) El siguiente código posee un error, encuéntralo y realiza las modificaciones pertinentes para que funcione a la perfección.
*/

var notebook = new Object();
notebook.marca = "Dell";
notebook.obtener_informacion = function(){
     console.log("Computador marca " + this.marca);
}
notebook.obtener_informacion();
