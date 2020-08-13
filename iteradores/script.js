function creandoIterador(arreglo) {
    let indiceSiguiente = 0;

    return {
        next: function () {  
            return indiceSiguiente < arreglo.length ? {value: arreglo[indiceSiguiente++],done: false} : {done: true}
        }
    }   
}

let iteracion1 = creandoIterador(["elem1","elem2"]);
console.log(iteracion1.next().value);
console.log(iteracion1.next().value);
console.log(iteracion1.next().done);

//------------------------------------------------------------------------------------
    //next debe retornar un objeto con dos valores. una propiedad value (cualquier dato que se quiere que el iterador produzca) y otra done que es un booleano que indica si el itertador a terminado de producir valores a iterar (falso, continua). Un iterador se recorre una vez y listo, no existe forma de reiniciarlo.
let iterador2 = {
    indice: 0,
    next(){
        this.indice++;
        if (this.indice <= 5){
            return {value: this.indice, done: false}
        }else {
            return { value: "fuera de rango", done: true }
        }
    }
}

console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);

//---------------------------------------------------

let iterador3 = {
    indice: 1,
    next(){
        let resultado = {value: null, done: false};
        if (this.indice <= 5) {
            resultado = {value: this.indice, done:false};
            this.indice++;
        } else {
            resultado = {done:true}
        }
        return resultado;
    }
}

console.log(iterador3.next());
console.log(iterador3.next());
console.log(iterador3.next());
console.log(iterador3.next());
console.log(iterador3.next());
setTimeout(() => console.log(iterador3.next()) , 5000);

//---------------------------------------------------

let iterador4 = {
    indice: 1,
    next(){
        let resultado = {value: null, done: false};
        if (this.indice <= 5) {
            resultado = {value: this.indice, done:false};
            this.indice++;
        } else {
            resultado = {value: "Fuera de Rango", done:true}
        }
        return resultado;
    }
}

let iterando = iterador4.next();

while (!iterando.done) {
    console.log(iterando.value);
    iterando = iterador4.next();
};

console.log(iterando.value);