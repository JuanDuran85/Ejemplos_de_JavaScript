$(function () {

    let expresion = /\d/gmi;

    $('form').on('submit', function (event){
        event.preventDefault();
        $("#resultado").empty();
        idHero = parseInt($('#idHero').val());
        console.log(idHero);
        consulta(idHero);
    });

    function consulta(idHero) {
        if (idHero && expresion.test(idHero)){
            $.ajax({
                dataType: "json",
                type: "get",
                url: "https://www.superheroapi.com/api.php/3525635500807579/"+idHero,
                success: function (result) {
                    console.log(result);
                    if (result.response === 'success') {
                        let resultado = `
                            <div class="w-50 mx-auto">
                                <h3 class="text-center">Super Hero Encontrado</h3>
                                <div class="card">
                                    <img src="${result.image.url}" class="card-img-top" alt="${result.name}">
                                    <div class="card-body">
                                        <h5 class="card-title">Nombre: ${result.name}</h5>
                                        <p class="card-text">${result.connections['group-affiliation']}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><em>Publicado por</em>: ${result.biography.publisher}</li>
                                        <li class="list-group-item"><em>Ocupación:</em> ${result.work.occupation}</li>
                                        <li class="list-group-item"><em>Primera Aparición:</em> ${result.biography['first-appearance']}</li>
                                        <li class="list-group-item"><em>Altura:</em> ${result.appearance.height.join(" - ")}.</li>
                                        <li class="list-group-item"><em>Peso:</em> ${result.appearance.weight.join(" - ")}.</li>
                                        <li class="list-group-item"><em>Alianzas:</em>
                                    
                        `;
                        // aqui el alumno puede implementar el metodo each() de jQuery o simplemente usar un join
                        result.biography.aliases.forEach(alianzas => {
                            resultado += `
                                <span>${alianzas}</span>
                            `;
                        });

                        resultado += `
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        `;
                        $('#resultado').append(resultado);
                    } else {
                        alert("El personaje no existe");
                    }
                    
                    let datosXY = [];
                    for (const key in result.powerstats) {
                        console.log(key, result.powerstats[key]);
                        datosXY.push(
                            {
                                label: key, 
                                y: parseInt(result.powerstats[key])
                            });
                    };

                    var options = {
                        title: {
                            text: "Estadísticas de Poder"              
                        },
                        data: [              
                            {
                                type: "column",
                                dataPoints: datosXY
                            }
                        ]
                    };
                
                    $("#chartContainer").CanvasJSChart(options);
                },
                error: function (error) {
                    console.error(error);
                }
            });

        } else {
            alert("Ingrese un número entre el 1 y el 731")
        }; 
    }
});