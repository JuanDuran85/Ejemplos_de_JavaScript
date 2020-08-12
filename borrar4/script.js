/* $(document).ready(function() {
    let texto = $('#texto');
    let entrada = $('#entrada');
    let btn = $('#btn');
 
    console.log(texto);
    console.log(entrada);
    console.log(btn);
 }); */

/*  $(document).ready(function() {
    let texto = $('.texto');
 
    console.log(texto);
 }); */
 
/*  $(document).ready(function() {
    $('ul.my-list > li > a').css('background','red');
}); */

/* $(document).ready(function() {
    $('#pais').change(function() {
        console.log($('#pais'))
        let paisSeleccionado = $(this).children("option:selected").val();
        console.log(paisSeleccionado)
        $('.resultado').text(paisSeleccionado);
        console.log($('.resultado'))
    })
 }); */

/*  $(document).ready(function() {
    $("#btn").on("click",function() {
         console.log( "Ocurrió un clic sobre el botón" );
         $( "li" ).filter( ":even" ).css( "background-color", "red" );
     });
 }); */

/*  $(document).ready(function() {
    function formatDate(date) {
        return (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + '.' + (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '')) + date.getMilliseconds();
};

        let contador = 0;
        $('#ejemplo').on('click', function() {
                contador++;
                console.log('--->' + formatDate(new Date()) + ' Clic '+contador+' vez!');
        });
}); */

/* let text = $('#texto');
text.click(function(){
    document.write('click sobre el texto');
}); */

$(document).ready(function(){
    $('button').on('click',function(){
       $.ajax({
          type:"GET",
          url:"https://jsonplaceholder.typicode.com/users",
          dataType:"json",
          success: function(datosApi) {
            console.log(datosApi);
            datosApi.forEach(element => { 
                $('.resultado').append(`<p>${element.id}-${element.name}-${element.username}-${element.email}-${element.phone}</p>`);
            })
          },
          error: function(error) {
              console.log(error);
          },
       });
    });
 });
