class Producto {
    constructor(nombre,sku,precio,marca) {
        this.nombre = nombre;
        this.sku = sku;
        this.precio = precio;
        this.marca = marca;
    }
}

class Computador extends Producto {
    constructor(nombre, sku, precio, marca, procesador){
        super (nombre, sku, precio, marca);
        this.procesador = procesador;
    }
}

class Nevera extends Producto {
    constructor(nombre, sku, precio, marca, puertas){
        super (nombre, sku, precio, marca);
        this.puertas = puertas;
    }
}

class Zapatos extends Producto {
    constructor(nombre, sku, precio, marca, talla){
        super (nombre, sku, precio, marca);
        this.talla = talla;
    }
}

let computador = new Computador('Acer Nitro', 'DTG56D', '700000', 'Acer','AMD7');
let nevera = new Nevera('Nevera FrioKing', '878GT3', '500000', 'LG','2');
let zapato = new Zapatos('Runner Team', '24NMGLK', '50000', 'Nike','42');

console.log(computador);
console.log(nevera);
console.log(zapato);