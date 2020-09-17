class Producto {
    constructor(nombre, precio, sku){
        let _nombre = nombre;
        let _precio = precio;
        let _sku = sku;

        this.getNombre = () => {
            return _nombre;
        }
        this.setNombre = (nuevoNombre) => {
            _nombre = nuevoNombre;
        }

        this.getPrecio = () => {
            return _precio;
        }
        this.setPrecio = (nuevoPrecio) => {
            _precio = nuevoPrecio;
        }

        this.getSku = () => {
            return _sku;
        }
        this.setSku = (nuevoSku) => {
            _sku = nuevoSku;
        }
    }

    get nombre(){
        return this.getNombre();
    }
    set nombre(nuevoNombre){
        this.setNombre(nuevoNombre);
    }

    get precio(){
        return this.getPrecio();
    }
    set precio(nuevoPrecio){
        this.setPrecio(nuevoPrecio);
    }

    get sku(){
        return this.getSku();
    }
    set sku(nuevoSku){
        this.setSku(nuevoSku);
    }

    generarCodigo(){
     console.log(this.nombre+this.precio+this.sku);
    }
}
 
class Movil extends Producto{
    constructor(nombre, precio, sku, sistemaOperativo) {
       super(nombre, precio, sku);
       this.sistemaOperativo = sistemaOperativo;
    }
    generarCodigo(){
     console.log(this.nombre + this.precio + this.sku + this.sistemaOperativo);
    }
}
 
let telef = new Movil('Samsung', 220000, 'GK234', 'Android');