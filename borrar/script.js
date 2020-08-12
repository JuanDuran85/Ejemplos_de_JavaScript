let form = document.getElementById("form");

form.addEventListener( "submit", function ( event ) {
   event.preventDefault();
   limpiarErrores();
   let textNombre = document.querySelector(".textNombre").value;
   let textTelefono = document.querySelector(".textTelefono").value;
   let textEmail = document.querySelector(".textEmail").value;

   let resultado = validar(textNombre,textTelefono,textEmail);

   if(resultado == true) {
     exito();
   };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorTelefono").innerHTML = "";
    document.querySelector(".errorEmail").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario paso la válidación";
};

function validar(nombre,telefono,email) {
    
    let pasamosLaValidación = true;  
    let validaciónNombre = /[a-zA-Z]/gim;
    
    if (validaciónNombre.test(nombre) == false) {        
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
        pasamosLaValidación = false;
    };

    let validaciónTelefono = /\d/gim;

    if (validaciónTelefono.test(telefono) == false) {        
        document.querySelector(".errorTelefono").innerHTML = "Ingrese un teléfono válido(sólo números)."
        pasamosLaValidación = false;
    };

    let validaciónEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
    
    if (validaciónEmail.test(email) == false ) {        
        document.querySelector(".errorEmail").innerHTML = "Ingrese un correo válido."
        pasamosLaValidación = false;
    };

    return pasamosLaValidación
};

/* var titulo = document.createElement('h2');
titulo.innerHTML = 'Creando elemento desde JavaScript';
document.body.appendChild(titulo);
let caja = document.getElementById('caja');
let button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('title', 'click aquí!!!');
button.innerHTML = "Botón Nuevo";
document.body.replaceChild(button, caja);
var borrando = document.getElementById('borrame');
document.body.removeChild(borrando); */

/* var num1 = prompt("Ingresa el primer número: ");
var num2 = prompt("Ingresa el segundo número: ");

if (num1 < num2) {
    console.log("El número 1 no es mayor que numero2");
}
if (num2 >= 0) {
    console.log("El número 2 es positivo");
}
if (num1 < 0) {
    console.log("El número 1 es negativo");
}

num1=prompt("Ingresa el primer número: "),num2=prompt("Ingresa el segundo número: "),num1<num2&&console.log("El número 1 no es mayor que numero2"),num2>=0&&console.log("El número 2 es positivo"),num1<0&&console.log("El número 1 es negativo"); */


/* var respuesta = prompt("¿Quiere usted aprender a programar con JavaScript?: ");

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {
    console.log("Felicitaciones, ya eres parte de Desafío Latam");
} else {
    console.log("Que lastima!!!… te esperamos");
} */

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
  }
 */

/* var respuesta = prompt("Escribe un Número del 1 al 4");

if (respuesta == 1) {
   alert("Escribiste el número uno");
}
else if (respuesta == 2) {
   alert("Escribiste el número dos");
}
else if (respuesta == 3) {
   alert("Escribiste el número tres");
}
else if (respuesta == 4) {
   alert("Escribiste el número cuatro");
}
else {
   alert("No es un número entre 1 y 4");
} */


/* var edad = prompt("Ingresa tu edad actual");
var respuesta = prompt("¿Quieres estudiar en Desafío Latam?, Si o No");

if (edad >= 18 && respuesta == "Si" || respuesta == "SI" || respuesta == "si") {
    alert("Exclente... Bienvenido");
} else if(edad < 18 && respuesta == "Si" || respuesta == "SI" || respuesta == "si") {
    alert("Que bueno, pero debes estar acompañado por tu representante");
} else if(respuesta == "NO" || respuesta == "No" || respuesta == "no") {
    alert("“Que lastima!!!… te esperamos pronto");
}
else {
    alert("Datos errados");
} */

/* var num = 1;

while (num <= 20) {
   document.write(num + "<br>");
   num = num + 2;
} */

/* var contador = 0; // inicio del contador en 0
var acumulador = 0; // inicio del acumular en 0

for(i=1; i<=50; i++){
   if(i % 2 != 0 ){ // se divide mediante el módulo del número
       contador++; // es igual que escribir: contador = contador + 1;
       acumulador += i; //es igual a escribir: acumulador = acumular + i;
  }
}
alert(`Hay ${contador} números impares entre 1 y 50 y la suma acumulada de ellos es: ${acumulador}`); */

/* var num1 = prompt("Ingresa primer número: ");
var num2 = prompt("Ingresa segundo número: ");

function suma (num1, num2) { // recibimos los dos números como parámetros de la función
  var num1 = parseInt(num1);
  var num2 = parseInt(num2);
  var resultadoSuma = num1 + num2;
  return resultadoSuma; // permite retornar de la función con un valor en específico
}
document.write(suma(num1, num2)); //enviamos los dos números ingresados por el usuario como argumentos de la función */

/* var cantidad_limones = 10;
// Ir al supermercado
for(i = 0; i < cantidad_limones; i++) {
    document.write("Tomar un limón del estante")
   // Tomar un limón del estante
} */

/* function suma () {
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var resultadoSuma = numero1 + numero2;
  return resultadoSuma;
}
 */

/* var edad = prompt("Ingrese su edad: ");

function saludo (edad) { // tomamos el parámetro de la variable.
    document.write("Hola, tienes " + edad + " años!!");
}

saludo(edad) */

/* function esPar(num) {
    if(num % 2 == 0) {
        return true;
    } else{
        return false;
    }
}
var totalImpares = 0;
for(let i = 1; i<= 80;i++) {
     if(esPar(i)) {
        console.log("El número "+ i + " es par");
     } else {
        totalImpares++;
     }
}
console.log("En el rango de 1 a 80 hay " + totalImpares + " de números impares."); */
/* 
function esPar(num) {
    if(num % 2 == 0) {
        return true;
    } else{
        return false;
    };
};

var totalImpares = 0;
var i = 1;

while(i<= 80) {
     if(esPar(i)) {
        console.log("El número "+ i + " es par");
     } else {
        totalImpares++;
     };
     i++;
};
console.log("En el rango de 1 a 80 hay " + totalImpares + " de números impares."); */
/* 
function factorial(num) {
    var res = 1;
    for (let i = 1; i <= num; i++) {
        res = res * i;
    }
    return res;
  }
  
  for (let i = 1; i <= 10; i++) {
    let res = factorial(i);
    console.log("Factorial de " + i + " es: " + res);
  } */

 /*  for(let i = 0; i < 5; i++) {
    console.log("i: "+i);
  for(let j = 0; j < 10; j++) {
    console.log("j: "+j);  
  } 
} */

/* for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 10; j++) {
        if(i == j) {
             console.log("El número "+ i +" se encuentra en ambos listados")
        }
     } 
 } */
