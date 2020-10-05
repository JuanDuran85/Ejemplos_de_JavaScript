import Poligono from './Poligono'

class Triangulo extends Poligono {
  constructor() {
    super()
    this.id = 3
    this.nombre = 'Triangulo'
  }
  area() {
    return (this.base * this.altura) /2
  }
  perimetro() {
    console.log(this)
    return this.lado * 3
  }
}

export default Triangulo
