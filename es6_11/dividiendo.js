let dividir = document.getElementById('dividir');

dividir.addEventListener('click',dividirNumeros);

function dividirNumeros (event) {
    event.preventDefault();
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = document.getElementById('resultado');
    
   let Operacion = function (num1,num2) {
      this.num1 = num1;
      this.num2 = num2;
   }
     
   Operacion.prototype.dividiendo = function () {
      return (this.num1 / this.num2);
   }
     
   if (parseInt(num1) != parseInt(num2) && parseInt(num1) && parseInt(num2)) {
      let division1 = new Operacion(parseInt(num1), parseInt(num2));   
      resultado.innerHTML = division1.dividiendo();
   }else {
      resultado.innerHTML = `El primer numero: ${num1 || '<b><em>No ingreso numero</em></b>'}, debe ser distinto al segundo numero: ${num2 || '<b><em>No ingreso numero</em></b>'}.`;
   }
}