let restar = document.getElementById('restar');
let resultado = document.getElementById('resultado');

restar.addEventListener('click',()=>{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    resultado.innerHTML = restando(parseInt(num1) || undefined,parseInt(num2) || undefined,parseInt(num3) || undefined);
});

restando = (a=1, b=1, c=1) => {
    return a - b - c;
}
