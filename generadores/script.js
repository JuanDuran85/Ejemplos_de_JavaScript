/* 
Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis function*.

La declaración function* (la palabra clave function seguida de un asterisco) define una función generadora, que devuelve un objeto Generator. También puedes definir funciones generadoras usando el constructor GeneratorFunction y una function* expression.

Si se utiliza return dentro de una funcion generadora, automaticamente la propiedad done pasa a true, terminando el proceso y retornando el valor que deba retornar la funcion.

las funciones generadoras siempre retornar generadores con yield
*/

function* generando() {
    console.log('---- en este punto P1 / inicio de la funcion ----');
    yield 1;
    console.log('---- en este punto P2 / mitad de la funcion ----');
    yield 2;
    console.log('---- en este punto P3 / final de la funcion ----');
    yield 3;
    console.log("No hay mas generador...");
};

let generador = generando();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

//------------------------------------------------------------

function* contando () {  
    let indice = 0;
    while (true) {
        yield indice++;
    }
};

let resultado = contando();

console.log(resultado.next().value)
console.log(resultado.next().value)
console.log(resultado.next().value)
console.log(resultado.next().value)
console.log(resultado.next().value)

//-----------------------------------------

function* cuenta() {
    for (let i = 0; i <= 5; i++) { 
        yield i;
    }
};

let resultado2 = cuenta();
console.log(resultado2.next());
console.log(resultado2.next());
console.log(resultado2.next());
console.log(resultado2.next());
console.log(resultado2.next());
console.log(resultado2.next());
console.log(resultado2.next());

// -----------------------------------------------------

