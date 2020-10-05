import Circulo from './Circulo.js'
import Rectangulo from './Rectangulo.js'
import Triangulo from './Triangulo.js'
import Octagono from './Octagono.js'
import Decagono from './Decagono.js'

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let Poligono = e.target.value
  let circulo = new Circulo()
  let rectangulo = new Rectangulo()
  let triangulo = new Triangulo()
  let octagono = new Octagono()
  let decagono = new Decagono()
  let poligonos = [circulo, rectangulo, triangulo, octagono, decagono]

  poligonos.forEach((poligono) => {
    if (Poligono == poligono.id) {
      console.log(`Perímetro del ${poligono.nombre}  ===> ${poligono.perimetro()}`)
      console.log(`Área del ${poligono.nombre} ===> ${poligono.area()}`)
    }
  })
})
   