let Foo = function (x) {
    this.x = x;
}

Foo.prototype.mostrarX = function () {
    console.log('el valor de X es: ' + this.x);
}

Foo.prototype.mostrarThis = function () {
    console.log('el valor de this es: ' + this);
 }

let f = new Foo(`bar`);
let b = f.mostrarThis;
f.mostrarX();
b();