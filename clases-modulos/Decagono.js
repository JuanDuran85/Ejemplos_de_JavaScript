import Poligono from './Poligono'

class Decagono extends Poligono {
  constructor() {
    super()
    this.id = 5
    this.nombre = 'Decagono'
  }
  area() {
    return (this.lado * 10) * this.apotema /2
  }
  perimetro() {
    console.log(this)
    return this.lado * 10
  }
}

export default Decagono
