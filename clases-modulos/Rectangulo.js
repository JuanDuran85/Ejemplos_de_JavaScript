import Poligono from './Poligono'

class Rectangulo extends Poligono {
  constructor() {
    super()
    this.id = 2
    this.nombre = 'Rectangulo'
  }
  area() {
    return (this.base * this.altura)
  }
  perimetro() {
    console.log(this)
    return (this.base + this.altura) * 2
  }
}

export default Rectangulo

