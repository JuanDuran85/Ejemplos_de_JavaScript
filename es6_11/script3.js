let Foo = function (x) {
    console.log("Valor de this");
    console.log(this);
    this.x = x;
}

Foo.prototype.mostrarX = function () {
    console.log("Valor de this");
    console.log(this);
    console.log("--------")
    console.log('el valor de X es: ' + this.x);
}

let a = {
    x: 3
}
Foo = Foo.bind(a);

console.log('a.x = ' + a.x);
let b = Foo(4);

console.log('a.x = ' + a.x)
console.log('b = ' + b);


let c = new Foo(5);
c.mostrarX();
console.log('a.x = ' + a.x)
