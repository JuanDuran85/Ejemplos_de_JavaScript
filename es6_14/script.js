console.log(`El numero mayo es: ${numeroMayor(-4,6,32,-7,3,2,8,9,5,-23)}`);

function numeroMayor () { 
    var mayor = -Infinity; 
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > mayor) {
          mayor = arguments[i];
        }
    }
    return mayor;
}

console.log(`El numero menor es: ${numeroMenor(4,6,2,8,-4,1,8,5,-2,-7)}`);

function numeroMenor () { 
    var menor = Infinity; 
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < menor) {
          menor = arguments[i];
        }
    }
    return menor;
}