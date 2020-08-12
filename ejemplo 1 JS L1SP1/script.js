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
document.write(parseInt(num1)/parseInt(num2));

var base = prompt("Ingrese la base del triángulo");
var altura = prompt("Ingrese la altura del triángulo");

document.write("El área del triángulo es: ");
document.write((parseInt(base)*parseInt(altura))/2);

const PI = 3.1416;
var radio = prompt("Ingrese el radio de la circunferencia");

document.write("El área de la circunferencia es: ");
document.write((PI*parseInt(radio)*parseInt(radio))); 


var dato = prompt("Ingrese un dato: ");
document.write(typeof dato); */

// var nombre = prompt("Ingresa tu nombre");
// var num1 = prompt("Ingrese el primer número");
// var num2 = prompt("Ingrese el segundo número");

// var suma = parseInt(num1)+parseInt(num2);
// var resta = parseInt(num1)-parseInt(num2);
// var multiplicacon = parseInt(num1)*parseInt(num2);
// var division = parseInt(num1)/parseInt(num2);

// document.write(nombre+" el resultado de sumar "+num1+" + "+num2+" es "+suma+". ");
// document.write(nombre+" el resultado de restar "+num1+" - "+num2+" es "+resta+". ");
// document.write(nombre+" el resultado de multiplicar "+num1+" * "+num2+" es "+multiplicacon+". ");
// document.write(nombre+" el resultado de dividir "+num1+" / "+num2+" es "+division+". ");

/* var nombre = prompt("Ingresa tu nombre");
var edad = prompt("Ingresa tu edad");
var id = prompt("Ingresa tu número de identificación");

document.write("Hola "+nombre+" tu edad es "+edad+" y tu número de identificación es "+id);
 */

/*  var op = prompt("Ingrese el numero de la operacion a realizar, 1->suma, 2->resta, 3->multiplicacion, 4->division"); */

/*  switch (operacion) {
     case '1':
            alert("Selecciono Suma")
         break;
     case '2':
            alert("Selecciono Resta")
         break;
     case '3':
            alert("Selecciono Multiplicacion")
         break;
     case '4':
            alert("Selecciono Division")
         break;
     default:
         alert("La operacion no es valida")
         break;
 } */

/* if (op == 1) {
    alert("Selecciono Suma")
} else if (op == 2) {
    alert("Selecciono Resta")
} else if (op == 3) {
    alert("Selecciono Multiplicacion")
} else if (op == 4) {
    alert("Selecciono Division")
} else {
    alert("La operacion no es valida")
} */

// var num = prompt("Ingrese el numero entre el 1 y el 7");

/* if (num == 1) {
    alert("El dia de la semana es Lunes")
} else if (num == 2) {
    alert("El dia de la semana es Martes")
} else if (num == 3) {
    alert("El dia de la semana es Miercoles")
} else if (num == 4) {
    alert("El dia de la semana es Jueves")
} else if (num == 5) {
    alert("El dia de la semana es Viernes")
} else if (num == 6) {
    alert("El dia de la semana es Sabado")
} else if (num == 7) {
    alert("El dia de la semana es Domingo")
} else {
    alert("El numero ingresado no es valida")
} */

/* switch (num) {
    case '1':
        alert("El dia de la semana es Lunes")
        break;
    case '2':
        alert("El dia de la semana es Martes")
        break;
    case '3':
        alert("El dia de la semana es Miercoles")
        break;
    case '4':
        alert("El dia de la semana es Jueves")
        break;
    case '5':
        alert("El dia de la semana es Viernes")
        break;
    case '6':
        alert("El dia de la semana es Sabado")
        break;
    case '7':
        alert("El dia de la semana es Domingo")
        break;
    default:
        alert("El numero ingresado no es valida")
        break;
} */

/* var num = prompt("Ingrese el numero para la tabla de multiplicar: ");

for (let i = 1; i <= 10; i++) {
    var resultado = num * i;
    document.write(`${num} X ${i} = ${resultado} <br>`);
} */

// var num = 0;

// while (num <= 10) {
//     document.write(num + "<br>");
//     num++;
// }

/* var num = 0;

while (num <= 20) {
   document.write(num + "<br>");
   num = num + 2;
} */

/* var num = 1; */

// while (num <= 10) {
//    document.write("Tomar un limon del estante <br>");
//    num = num + 1;
// }

/* var contador = 0; // inicio del contador en 0
var acumulador = 0; // inicio del acumular en 0

for(i=1; i<=100; i++){
   if(i % 2 === 0 ){ // se divide mediante el módulo del número
       contador++; // es igual que escribir: contador = contador + 1;
       acumulador += i;
  }
}
alert(`Hay ${contador} números pares entre 1 y 100 y la suma acumulada de ellos es: ${acumulador}`); */

/* var num = prompt("Ingrese un numero entero");

function verificar(numero) {
    if (numero > 0) {
        resultado = "positivo";
    } else if (numero < 0) {
        resultado = "negativo";
    } else if (numero === 0) {
        resultado = "nulo";
    } else {
        resultado = "no es un numero";
    }

    return resultado
}

alert(`El numero ingresado es: ${verificar(parseInt(num))}`); */


/* var base = prompt("Ingrese el valor de la base del triangulo rectangulo");
var altura = prompt("Ingrese el valor de la altura del triangulo rectangulo");

function calculo_area(base,altura) {
    let area = (parseInt(base)*parseInt(altura))/2;
    return area;
};

document.writeln(`El resultado del area es: ${calculo_area(base,altura)}`); */

/* var num1 = 1;
var num2 = 2;
var num3 = 3;

function sumaNumeros (num1,num2,num3) {
    let suma = num1 + num2 + num3;
    alert("El resultado es: " + suma);
};

sumaNumeros(num1,num2,num3); */

/* function miFuncion() {
    let miVariable = 4;
  
    function potencia() {
      return miVariable * miVariable;
    }
  
    return potencia();
}
  
let resultado = miFuncion();
 
console.log(resultado);
resultado = potencia(); */


/* const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum (nums) {
    console.log(nums);
    if (nums.length < 1) {
        return 0;
    }

    var value = nums.shift();
    console.log(value);
    return value + sum(nums);
}
console.log(sum(nums))  */
/* var suma = 0;

function saludos(valor1,valor2) {
    suma = valor1 + valor2;
    alert("Saludando desde función");
}

var num1 = 20;
var num2 = 30;

saludos(num1,num2);
console.log(suma); */

/* function factorial_numero(numero) {     
    if (numero > 1) {         
        return numero * factorial_numero(numero - 1);     
    } else {         
        return numero;
    } 
}

var numero = prompt("Ingrese un numero");
document.write(`El factorial de ${numero}! es: ${factorial_numero(numero)}`); */

/* var num = prompt("Ingrese un numero entero");

let verificar = (numero) => {
    if (numero > 0) {
             resultado = "positivo";
    } else if (numero < 0) {
             resultado = "negativo";
    } else if (numero === 0) {
             resultado = "nulo";
    } else {
             resultado = "no es un número";
    }

    return resultado
}

alert(`El numero ingresado es: ${verificar(parseInt(num))}`); */

/* function suma() {
    let num1 = prompt("Ingrese un primer numero");
    let num2 = prompt("Ingrese un segundo numero");
    resultado = parseInt(num1) + parseInt(num2);
    return resultado;
};

function resta() {
    let num1 = prompt("Ingrese un primer numero");
    let num2 = prompt("Ingrese un segundo numero");
    resultado = parseInt(num1) - parseInt(num2);
    return resultado;
};

var resultado;
document.write(`El resultado de la suma es: ${suma()} <br>`);
document.write(`El resultado de la resta es: ${resta()}`); */

/* for (let i = 1; i <= 10; i++) {
    let res = 1;
    for (let j= 1; j <= i; j++) {
       res = res * j;
   }
   console.log("Factorial de " + i + " es: " + res);
 } */

/*  const PI = 3.1416;

 function cilindro(radio,altura) {
     let volum = PI * radio * radio * altura;
     document.write(`El volumen del cilindro es: ${volum}`); 
 }

 let radio = prompt("Ingrese el radio del cilindro");
 let altura = prompt("Ingrese la altura del cilindro");
 cilindro(radio,altura); */

/*  let saludar = () => {
    let nombre = prompt('Ingresa tu nombre');
    let edad = prompt('Ingresa tu edad');

    if (edad >= 18) {
        return `Hola ${nombre}, tu edad es: ${edad}, por lo tanto eres mayor de edad`;
    }else{
        return `Hola ${nombre}, tu edad es: ${edad}, por lo tanto eres menor de edad`;
    }

 };

 alert(saludar()); */

/*  function esMultiplo(num) {
    if(num % 4 == 0) {
        return true;
    } else{
        return false;
    }
}
var multiploCuatro = 0;
var i = 1;
while(i<= 500) {
     if(esMultiplo(i)) {
        console.log("El número "+ i + " es multiplo de 4");
     } else {
        multiploCuatro++;
     }
     i++;
}
console.log("En el rango de 1 a 500 hay " + multiploCuatro + " números multiplos de 4."); */

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(`${j} x ${i}  = ${j*i}`);
    }
}
