/* var nombre = prompt("Ingresa tu nombre");
var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");

var suma = parseInt(num1)+parseInt(num2);
var resta = parseInt(num1)-parseInt(num2);
var multiplica = parseInt(num1)*parseInt(num2);
var divide = parseInt(num1)/parseInt(num2);

document.write(nombre+" el resultado de sumar "+num1+" + "+num2+" es "+suma+". ");
document.write(nombre+" el resultado de restar "+num1+" - "+num2+" es "+resta+". ");
document.write(nombre+" el resultado de multiplicar "+num1+" * "+num2+" es "+multiplica+". ");
document.write(nombre+" el resultado de dividir "+num1+" / "+num2+" es "+divide+". "); */

/* var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");

document.write("La suma es: ");
document.write(parseInt(num1)+parseInt(num2));
document.write(" ");
document.write("La resta es: ");
document.write(parseInt(num1)-parseInt(num2));
document.write(" ");
document.write("La multiplicación es: ");
document.write(parseInt(num1)*parseInt(num2));
document.write(" ");
document.write("La división es: ");
document.write(parseInt(num1)/parseInt(num2)); */
/* 
function suma () {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoSuma = numero1 + numero2;
    return resultadoSuma;
} */

/* var edad = prompt("Ingrese su edad: ");

function saludo (edad) { // tomamos el parámetro de la variable.
  document.write("Hola, tienes " + edad + " años!!");
}

saludo(edad)  */

/* var num = prompt("Escribe un Número del 1 al 7");
switch (num) {
  case "1":
      alert("El día de la semana es lunes");
      break;
  case "2":
      alert("El día de la semana es martes");
      break;
  case "3":
      alert("El día de la semana es miércoles");
      break
  case "4":
      alert("El día de la semana es jueves");
      break
  case "5":
      alert("El día de la semana es viernes");
      break
  case "6":
      alert("El día de la semana es sábado");
      break
  case "7":
      alert("El día de la semana es domingo");
      break
  default:
      alert("El número ingresado no corresponde a un día de la semana");
      break;
} */

/* var cantidad_limones = 10;
// Ir al supermercado
for(i = 0; i < cantidad_limones; i++) {
    document.write("Tomar un limón del estante")
   // Tomar un limón del estante
}
//Volver a casa */

/* var num = 0; // inicio de la variable doble propósito

while (num <= 10) { // condición a evaluar antes de entrar al ciclo
  document.write(num + "<br>"); // imprimimos el valor de la variable
  num++; // incrementamos la variable en 1 para antes de iniciar el ciclo nuevamente y pasar por la condición de evaluación
} */

/* var num = 0;

while (num <= 20) {
   document.write(num + "<br>");
   num = num + 2;
} */

/* var num1 = prompt("Ingresa primer número: ");
var num2 = prompt("Ingresa segundo número: ");

function suma (num1, num2) { // recibimos los dos números como parámetros de la función
  var num1 = parseInt(num1);
  var num2 = parseInt(num2);
  var resultadoSuma = num1 + num2;
  return resultadoSuma; // permite retornar de la función con un valor en específico
}
document.write(suma(num1, num2)); //enviamos los dos números ingresados por el usuario como argumentos de la función */

/* var num1 = prompt("Ingrese el primer número: ");
var num2 = prompt("Ingrese el segundo número: ");

function resta (a,b) {
    let resultado = parseInt(a) - parseInt(b);
    return resultado;
};

document.write("Resultado de la resta: "+resta(num1,num2)); */

/* var num1 = prompt("Ingrese el primer número: ");
var num2 = prompt("Ingrese el segundo número: ");

let divide = function (a,b) {
    let resultado = parseInt(a) / parseInt(b);
    return resultado;
};

document.write("Resultado de la división: "+divide(num1,num2)); */

/* var num = prompt("Ingrese el número: ");

let cuadrado = (num) => {
    let resultado = Math.pow(num,2);
    return resultado;
};

document.write("El cuadro del número ingreso es: "+cuadrado(num)); */

/* var base = prompt("Ingrese el valor de la base del triángulo rectángulo");
var altura = prompt("Ingrese el valor de la altura del triángulo rectángulo");

function calculo_area(base,altura) {
    let area = (parseInt(base)*parseInt(altura))/2;
    return area;
};

document.writeln(`El resultado del área es: ${calculo_area(base,altura)}`); */

/* var num1 = 1;
var num2 = 2;
var num3 = 3;

function sumaNumeros (num1,num2,num3) {
    let suma = num1 + num2 + num3;
    alert("El resultado es: " + suma);
};

sumaNumeros(num1,num2,num3); */

/* var impar = 0;

for (let i = 0; i <= 20; i++) {
    if (i == 10) {
      continue;  // se ignora cualquier otro proceso
    };
    if (i == 19) {
      break;  // se rompe el ciclo actual
    };
    if (i % 2 == 0) {
      document.write(i+"<br>");
    }else {
      impar++;
    };
};
document.write("La cantidad de números impares es: "+impar); */

/* let impar = 0;
let i = 1;

while(i <= 15) {
    i++;
    if (i == 9) {
      continue;  // se ignora cualquier otro proceso
    };
    if (i == 14) {
      break;  // se rompe el ciclo actual
    };
    if (i % 2 == 0) {
      document.write(i+"<br>");
    }else {
      impar++;
    };
};
document.write("La cantidad de números impares es: "+impar); */

/* let no_multiplo = 0;
let i = 1;

do {
    if (i == 16) {
      i++;
      continue;  // se ignora cualquier otro proceso
    };
    if (i == 45) {
      break;  // se rompe el ciclo actual
    };
    if (i % 4 == 0) {
      document.write(i+"<br>");
    }else {
      no_multiplo++;
    };
    i++;
}while(i <= 50);
document.write("La cantidad de números no múltiplos de cuatro es: "+no_multiplo); */

/* var titulo = document.createElement('h3');
titulo.innerHTML = 'Creando elemento desde JavaScript';
document.body.appendChild(titulo); */

/* var miBtn = document.getElementById("boton");
miBtn.addEventListener('click',function(){
 var texto = document.querySelector(".input-a-buscar");
 document.querySelector(".resultado").innerHTML = "Estas buscando: " + texto.value;
}); */

/* var botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener('click',saludo);

function saludo(){
   var nombre = document.querySelector(".nombre");
   var edad = document.querySelector(".edad");
   document.querySelector(".resultado").innerHTML = `Hola ${nombre.value},   tu edad es ${edad.value} años`;
}; */

/* function login(){
    var email = document.querySelector(".email");
    var password = document.querySelector(".password");
    alert("Ingreso exitoso: "+email.value);
 };
 
 let form = document.getElementById( "formulario" );
 form.addEventListener( "submit", login); */

 var miBtn = document.getElementById("boton");

/* miBtn.addEventListener('click',function(){
  var texto = document.querySelector(".input-a-buscar");
 
  if (texto.value !== "") {
    document.querySelector(".resultado").innerHTML = "Estas buscando: " + texto.value;
  } else {
    document.querySelector(".error").innerHTML = "Para poder buscar debes ingresar una palabra";
  };
}); */

/* var usuarios = [
'Manuel',
{nombre: 'Juan',edad: 34},
30,
{nombre: 'Rodrigo',edad: 55},
true,
{nombre: 'Paola',edad: 34},
'Pedro',
['Maria','Eliana']
];
    
for (var i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i]);
}; */

/* let persona = {
    nombre: 'Marcelo Salas',
    edad: 11,
    saludar: () => {
      return "Buena matador!";
   }
 }
  
 for (propiedad in persona) {
    console.log(propiedad);
 } */

/*  let mascotas = ['Perros',{nombre: 'Firulais',edad: 5},'Gatos',{nombre: 'Michi',edad: 2},'Aves',{nombre: 'Pepito',edad: 1},]

for (let dato1 in mascotas) {
    console.log(dato1);    //
};

for (let dato2 of mascotas) {
    console.log(dato2);    //
};
 */

/* let listaSuperA = ["Yogurt","Avena", "Leche","Helado"];
let listaSuperB = ["Galletas","Jugo","Yogurt","Leche"];

let listaSuperFinal = listaSuperA.filter((producto)=> {
    console.log(producto);
return listaSuperB.indexOf(producto) >= 0 // Si el producto existe retorna la posición del elemento
});

console.log(listaSuperFinal); */

class Pokemon {
  constructor(nombre, tipo, nivel, ataque) {
      this.nombre = nombre;
      this.nivel = nivel;
      this.tipo = tipo;
      this.ataque = ataque;
  }

  lanzarAtaque(){
      return this.ataque * Math.random()
  }
}
