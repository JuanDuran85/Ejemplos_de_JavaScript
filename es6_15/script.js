const crearRectanguloInterno = function (spec) {
    const {x, y} = spec;
    const poligonoInterno = crearAPoligono();

    function calcularArea() {
        return x * y;
    }

    function calcularPerimetro() {
        return 2 * (x + y);
    }

    return Object.freeze({
        calcularArea: calcularArea,
        calcularPerimetro: calcularPerimetro
    });
 }

 const crearRectangulo = function (spec) {
    const abstraccion = crearAPoligono();
    const rectangulo = crearRectanguloInterno(spec);

    return Object.freeze({
        calcularArea: rectangulo.calcularArea || abstraccion.calcularArea,
        calcularPerimetro: rectangulo.calcularPerimetro || abstraccion.calcularPerimetro,
    });
 }
 
 const crearAPoligono = function () {
    function calcularArea() {
        throw 'Error: no implementado. Poligono describe una interfaz. no debe ser construido directamente';
    }

    function calcularPerimetro() {
        throw 'Error: no implementado. Poligono describe una interfaz. no debe ser construido directamente';
    }

    return Object.freeze({
        calcularArea: calcularArea,
        calcularPerimetro: calcularPerimetro
    });
}

const crearCuadrado = function (spec) {
    spec.y = spec.x;
    return crearRectangulo(spec);
}

const crearCirculoInterno = function (spec) {
    const {r} = spec;

    function calcularArea() {
        return r * r * Math.PI;
    }

    function calcularPerimetro() {
        return 2 * r * Math.PI;
    }

    return Object.freeze({
        calcularArea: calcularArea,
        calcularPerimetro: calcularPerimetro
    });
}

const crearCirculo = function (spec) {
    const abstraccion = crearAPoligono();
    const circulo = crearCirculoInterno(spec);

    return Object.freeze({
        calcularArea: circulo.calcularArea || abstraccion.calcularArea,
        calcularPerimetro: circulo.calcularPerimetro || abstraccion.calcularPerimetro,
    });
}

let rectangulo1 = crearRectangulo({x: 3, y: 4});
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());
let cuadrado1 = crearCuadrado({x: 3});
console.log(cuadrado1.calcularArea());
console.log(cuadrado1.calcularPerimetro());
let circulo1 = crearCirculo({r: 3});
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());