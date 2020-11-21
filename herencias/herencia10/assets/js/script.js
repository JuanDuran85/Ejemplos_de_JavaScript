let iifeGlobal = (()=>{
    let musica = document.getElementById('musica');
    let peliculas = document.getElementById('peliculas');
    let series = document.getElementById('series');

    let inyectarTodo = (urlMusica,urlPelicula,urlSerie) => {
        musica.innerHTML = "";
        peliculas.innerHTML = "";
        series.innerHTML = "";
        musica.insertAdjacentHTML('afterbegin', urlMusica);
        peliculas.insertAdjacentHTML('afterbegin', urlPelicula);
        series.insertAdjacentHTML('afterbegin', urlSerie);
    };

    return {
        mostrarTodo: (urlMusica,urlPelicula,urlSerie) => inyectarTodo(urlMusica,urlPelicula,urlSerie),
    }
})();

let videoMusica = `<iframe width="560" height="315" src="https://www.youtube.com/embed/YODCM26JXOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let videoPelicula = `<iframe width="560" height="315" src="https://www.youtube.com/embed/6ziBFh3V1aM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let videoSeries = `<iframe width="560" height="315" src="https://www.youtube.com/embed/HhesaQXLuRY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

class Multimedia {
    constructor(urlMusica,urlPelicula,urlSerie){
        let _urlMusica = urlMusica;
        let _urlPelicula = urlPelicula;
        let _urlSerie = urlSerie;

        this.getUrlMusica = () => _urlMusica;
        this.getUrlPelicula = () => _urlPelicula;
        this.getUrlSerie = () => _urlSerie;
    }

    get urlMusica(){
        return this.getUrlMusica();
    };
    get urlPelicula(){
        return this.getUrlPelicula();
    };
    get urlSerie(){
        return this.getUrlSerie();
    };

    playMultimedia(){
        iifeGlobal.mostrarTodo(this.urlMusica, this.urlPelicula, this.urlSerie);
    }
}

class Reproductor extends Multimedia {
    constructor(urlMusica,urlPelicula,urlSerie){
        super(urlMusica,urlPelicula,urlSerie);
    }
    playMultimedia(){
        iifeGlobal.mostrarTodo(this.urlMusica, this.urlPelicula, this.urlSerie);
    }
};

let play = new Reproductor(videoMusica,videoPelicula,videoSeries);
play.playMultimedia();