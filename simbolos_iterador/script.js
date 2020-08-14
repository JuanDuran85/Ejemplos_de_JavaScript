let rango = {
    minimo: null,
    maximo: null,
    indice: null,
    [Symbol.iterator](){
        return this;
    },
    next(){
        if (this.indice == null) {
            this.indice = this.minimo;
        }
        let resultado = {};
        if (this.indice >= this.minimo && this.indice <= this.maximo){
            resultado = {value: this.indice, done: false};
            this.indice++;
        } else {
            resultado = {value: "Sobre paso el valor...", done: true};
        }
        return resultado;
    }
};

rango.minimo = 1;
rango.maximo = 10;

for (const iterator of rango) {
    console.log(iterator);
}