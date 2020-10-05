/* 
Para la solución de esta desafio, encontraran distintas formas o maneras de dar solución a cada uno de los puntos solicitados. Todas son correctas, solo que algunas son más eficientes que otras en cuestion de lineas escritas o de consumo de recursos del navegador. Por lo tanto, se debe aclarar al alumno que cualquiera sea el método que utilice (siempre y cuando consiga el resultado requerido), es válido.
*/

$(document).ready(function () {

    var enlaces = $('a');

    enlaces.attr('target','_blank');

    // ver aclaratoria al final del script (otras formas de dar solución a lo solicitado)
    $.map(enlaces, function (element, index) {

        if (element.innerHTML == 'Facebook') {
            $('a').eq(index).prepend('<i class="fab fa-facebook-f"></i> ');
        }; 
        if (element.innerHTML == 'Instagram') {
            $('a').eq(index).prepend('<i class="fab fa-instagram"></i> ');
        }; 
        if (element.innerHTML == 'Twitter') {
            $('a').eq(index).prepend('<i class="fab fa-twitter"></i> ');
        };
        if (element.innerHTML == 'Snapchat') {
            $('a').eq(index).prepend('<i class="fab fa-snapchat-ghost"></i> ');
        };

    });

    $('h2').click(function (e) { 
        e.preventDefault();
        $(this).css('color','red');
    });
        //otras maneras de solucionar lo solicitado anteriormente
/*     $('body').on('click','h2',function (e) {
        e.preventDefault();
        $(this).css("color",'red');
    });
    $("h2").on("click", function (e) {
        e.preventDefault();
        $(this).css("color", "red");
      }); */

    /* Aquí se pueden aplicar distintas maneras con distintos métodos para poder llegar al elemento indicado*/
    $('section').eq(1).children('ul').children('li').eq(3).append('<ul><li><a href="#">link 4.a</a></li></ul>');
    $('section').eq(1).children('ul').children('li').eq(3).after('<li><a href="#">link 5</a></li>');
    //otras maneras de solucionar lo solicitado anteriormente
    //$(":nth-child(3) > ul > li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>');
    //$("section:nth-of-type(2) > ul li:nth-child(4)").append('<ul><li><a href="#">link 4a</a></li></ul>');

/* ------------------------------------------------------
La utilización del map no se encuentra explicada dentro del contenido facilitado a los alumnos, por lo tanto, otra opción para resolver ese punto es mediante las siguientes estructuras (igualmente se puede aplicar otros métodos para dar solución al desafío):
--------------------------------------------------------- */
    //Método 1
    // $('a').eq(0).prepend('<i class="fab fa-facebook-f"></i>');
    // $('a').eq(1).prepend('<i class="fab fa-instagram"></i>');
    // $('a').eq(2).prepend('<i class="fab fa-twitter"></i>');
    // $('a').eq(3).prepend('<i class="fab fa-snapchat-ghost"></i>');
    // $('a').eq(4).prepend('<i class="fab fa-facebook-f"></i>');
    // $('a').eq(5).prepend('<i class="fab fa-instagram"></i>');
    // $('a').eq(6).prepend('<i class="fab fa-twitter"></i>');
    // $('a').eq(7).prepend('<i class="fab fa-snapchat-ghost"></i>');
    // $('a').eq(8).prepend('<i class="fab fa-facebook-f"></i>');
    // $('a').eq(9).prepend('<i class="fab fa-instagram"></i>');
    // $('a').eq(10).prepend('<i class="fab fa-twitter"></i>');
    // $('a').eq(11).prepend('<i class="fab fa-snapchat-ghost"></i>');
    // $('a').eq(12).prepend('<i class="fab fa-facebook-f"></i>');
    // $('a').eq(13).prepend('<i class="fab fa-instagram"></i>');
    // $('a').eq(14).prepend('<i class="fab fa-twitter"></i>');
    // $('a').eq(15).prepend('<i class="fab fa-snapchat-ghost"></i>');

    //Método 2
    // $("ul li:first-child").prepend("<i class='fab fa-facebook-f'></i> ");
    // $("ul li:nth-child(2)").prepend("<i class='fab fa-instagram'></i> ");
    // $("ul li:nth-child(3)").prepend("<i class='fab fa-twitter'></i> ");
    // $("ul li:nth-child(4)").prepend("<i class='fab fa-pinterest'></i> ");

    //Método 3
    // $("a:contains(Facebook)").prepend('<i class="fab fa-facebook-f"></i> ');
    // $("a:contains(Instagram)").prepend('<i class="fab fa-instagram"></i> ');
    // $("a:contains(Twitter)").prepend('<i class="fab fa-twitter"></i> ');
    // $("a:contains(Snapchat)").prepend('<i class="fab fa-snapchat-ghost"></i> '); 

});