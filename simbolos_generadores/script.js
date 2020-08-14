let rango = {
    minimo: null,
    maximo: null,
    indice: null,
    [Symbol.iterator](){
        return this.generador();
    },
    generador: function* (){
        for (var i = this.minimo; i <= this.maximo; i++) {
            yield i;
        }
    },
};

rango.minimo = 1;
rango.maximo = 10;

for (const iterator of rango) {
    console.log(iterator);
}