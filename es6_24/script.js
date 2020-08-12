const crearRectanguloInterno = function (valores) {
    const {x, y} = valores;
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

const crearTrianguloloInterno = function (valores) {
    const {x, y} = valores;
    const poligonoInterno = crearAPoligono();

    function calcularArea() {
        return (x * y)/2;
    }

    function calcularPerimetro() {
        let z = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        return (x + y + z);
    }

    return Object.freeze({
        calcularArea: calcularArea,
        calcularPerimetro: calcularPerimetro
    });
}

const crearRectangulo = function (valores) {
    const abstraccion = crearAPoligono();
    const rectangulo = crearRectanguloInterno(valores);
    const triangulo = crearTrianguloloInterno(valores);

    return Object.freeze({
        calcularArea: rectangulo.calcularArea || triangulo.calcularArea || abstraccion.calcularArea,
        calcularPerimetro: rectangulo.calcularPerimetro || triangulo.calcularPerimetro || abstraccion.calcularPerimetro,
    });
}

const crearTriangulo = function (valores) {
    const abstraccion = crearAPoligono();
    const triangulo = crearTrianguloloInterno(valores);

    return Object.freeze({
        calcularArea: triangulo.calcularArea || abstraccion.calcularArea,
        calcularPerimetro: triangulo.calcularPerimetro || abstraccion.calcularPerimetro,
    });
}
 
const crearAPoligono = function () {
    function calcularArea() {
        throw 'Error: no implementado. Polígono describe una interfaz. no debe ser construido directamente';
    }

    function calcularPerimetro() {
        throw 'Error: no implementado. Polígono describe una interfaz. no debe ser construido directamente';
    }

    return Object.freeze({
        calcularArea: calcularArea,
        calcularPerimetro: calcularPerimetro
    });
}

const crearCuadrado = function (valores) {
    valores.y = valores.x;
    return crearRectangulo(valores);
}

const crearParalelogramo = function (valores) {
    const {x, y} = valores;
    return crearRectangulo(valores);
}

const crearCirculoInterno = function (valores) {
    const {r} = valores;

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

const crearCirculo = function (valores) {
    const abstraccion = crearAPoligono();
    const circulo = crearCirculoInterno(valores);

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

let triangulo1 = crearTriangulo({x: 3, y: 4});
console.log(triangulo1.calcularArea());
console.log(triangulo1.calcularPerimetro());

let paralelogramo1 = crearParalelogramo({x: 3, y: 4});
console.log(paralelogramo1.calcularArea());
console.log(paralelogramo1.calcularPerimetro());
