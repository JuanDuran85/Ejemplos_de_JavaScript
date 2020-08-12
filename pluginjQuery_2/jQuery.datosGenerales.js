jQuery.fn.datosGenerales = function() {
    var element = this;
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
        dataType:"json",
        success: function(data) {
            console.log(data)
            data.forEach(datos => {
                element.append(`<p>ID: ${datos.id} - Name: ${datos.name} - UserName: ${datos.username}</p>`);
            });
        }
    });
   return this;
};