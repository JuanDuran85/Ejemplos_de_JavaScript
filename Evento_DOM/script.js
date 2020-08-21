var caja = document.getElementById("box");
var verde = document.getElementById('green');
var amarillo = document.getElementById('yellow');
var rojo = document.getElementById('red');
var cuatroCientos = document.getElementById('cuatroCientos');
var cien = document.getElementById('cien');

verde.addEventListener('click', function () {
    cambiar_color("green");
});

amarillo.addEventListener('click', function () {
    cambiar_color("yellow");
});

rojo.addEventListener('click', function () {
    cambiar_color("red");
});

cuatroCientos.addEventListener('click', function () {
    cambiar_dimension("400px");
});

cien.addEventListener('click', function () {
    cambiar_dimension("100px");
});

function cambiar_color(color){
    caja.style.backgroundColor = color;
};

function cambiar_dimension(valor){
    caja.style.width = valor;
    caja.style.height = valor;
};