const crearRectanguloInterno = function (valores) {
    const {x, y} = valores;

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
    const rectangulo = crearRectanguloInterno(valores);

    return Object.freeze({
           calcularArea: rectangulo.calcularArea,
           calcularPerimetro: rectangulo.calcularPerimetro
    });
}

const crearTriangulo = function (valores) {
    const triangulo = crearTrianguloloInterno(valores);

    return Object.freeze({
           calcularArea: triangulo.calcularArea,
           calcularPerimetro: triangulo.calcularPerimetro,
    });
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
    const circulo = crearCirculoInterno(valores);

    return Object.freeze({
           calcularArea: circulo.calcularArea,
           calcularPerimetro: circulo.calcularPerimetro,
    });
}

let rectangulo1 = crearRectangulo({x: 3, y: 4});
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

let circulo1 = crearCirculo({r: 3});
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());

let triangulo1 = crearTriangulo({x: 3, y: 4});
console.log(triangulo1.calcularArea());
console.log(triangulo1.calcularPerimetro());