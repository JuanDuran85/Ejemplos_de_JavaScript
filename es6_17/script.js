let calcular = document.getElementById('calcular');

calcular.addEventListener('click',calcularArea);

function calcularArea() {
    event.preventDefault();
    let radio = parseInt(document.getElementById('radio').value);
    let resultado1 = document.getElementById('resultado1');
    let resultado2 = document.getElementById('resultado2');

    let Circulo = function (radio) {
        this.radio = radio;
     }
          
     Circulo.prototype.area = function () {
        return (Math.PI * Math.pow(this.radio,2));
     }

     Circulo.prototype.perimetro = function () {
        return (2 * Math.PI * this.radio);
     }

     if (radio && radio > 0) {
        let areaCirculo = new Circulo(radio);   
        resultado1.innerHTML = areaCirculo.area();
        resultado2.innerHTML = areaCirculo.perimetro();
     }else {
        resultado1.innerHTML = `Debe ingresar un numero... `;
        resultado2.innerHTML = ` y este debe ser mayor que cero`;
     };
};
