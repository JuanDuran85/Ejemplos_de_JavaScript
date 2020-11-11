let saludo = () => console.log("saludos a todos");
saludo() // el resultado sería → saludos a todos

//-----------------------------------------------------------------------

let potencia = (num) => Math.pow(num,2);
console.log(potencia(2)) // el resultado sería → 4

//-----------------------------------------------------------------------

let suma = (num1,num2) => num1 + num2;
console.log(suma(4,5)) // el resultado sería → 9

//-----------------------------------------------------------------------

let resta = (num) => {
    let num2 = 20;
    return num - num2;
}
console.log(resta(4));

//-----------------------------------------------------------------------

const usuario = {
    name: "Juan",
    mostrarNOmbre: () =>{
      return this.name;
    },
};
console.log(usuario.mostrarNOmbre());

//-----------------------------------------------------------------------

function foo (a = 1, b = 2, c = 3) {   //ES6
    return a + b + c;
};
console.log(foo());

let foo = (a = 1, b = 2, c = 3) => a + b + c;
console.log(foo());

//-----------------------------------------------------------------------

var pruebaVar = () => {
    var num = 31;
    if (true) {
        var num = 71;
        console.log(num);  // 71
    }
    console.log(num);  // 71
};

let pruebaLet = () => {
    let num = 31;
    if (true) {
        let num = 71;
        console.log(num);  // 71
    }
    console.log(num);  // 31
};

const pruebaConst = () => {
    const num = 31;
    if (true) {
    const num = 71;
    console.log(num);  // 71
    }
    console.log(num);  // 31
};

pruebaVar();
pruebaLet();
pruebaConst(); 