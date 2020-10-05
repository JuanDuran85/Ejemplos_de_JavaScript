import Poligono from './Poligono'

class Octagono extends Poligono {
  constructor() {
    super()
    this.id = 4
    this.nombre = 'Octagono'
  }
  area() {
    return (this.lado * 8) * this.apotema /2
  }
  perimetro() {
    console.log(this)
    return this.lado * 8
  }
}

export default Octagono
