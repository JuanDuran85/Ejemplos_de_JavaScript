let sugerencias = (() => {
    let musica = document.querySelector('#musica');
    let peliculas = document.querySelector('#peliculas');
    let series = document.querySelector('#series');
    
    insertarMusica = (videoMostrar) => {
        musica.insertAdjacentHTML('afterbegin', videoMostrar);
    }
    insertarPelicua = (videoMostrar) => {
        peliculas.insertAdjacentHTML('afterbegin', videoMostrar);
    }
    insertarSerie = (videoMostrar) => {
        series.insertAdjacentHTML('afterbegin', videoMostrar);
    }

    return {
        mostrandoMusica: (videoMostrar)=>{
            insertarMusica(videoMostrar);
        },
        mostrandoPelicula: (videoMostrar)=>{
            insertarPelicua(videoMostrar);
        },
        mostrandoSeries: (videoMostrar)=>{
            insertarSerie(videoMostrar);
        }
    }
})();

let videoMusica = `<iframe width="560" height="315" src="https://www.youtube.com/embed/VDd_sdAMbtE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; 
 
let videoPelicula = `<iframe width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
let videoSerie = `<iframe width="560" height="315" src="https://www.youtube.com/embed/rlR4PJn8b8I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

class Video {
    constructor(videoMusica, videoPelicula, videoSeries){
        let _videoMusica = videoMusica;
        let _videoPelicula = videoPelicula;
        let _videoSeries = videoSeries;

        this.getVideoMusica = () => _videoMusica;
        this.getVideoPelicula = () => _videoPelicula;
        this.getVideoSeries = () => _videoSeries;
    }

    get videoMusica(){
        return this.getVideoMusica();
    }

    get videoPelicula(){
        return this.getVideoPelicula();
    }

    get videoSeries(){
        return this.getVideoSeries();
    }

    mostrarMusica(){
        sugerencias.mostrandoMusica(this.videoMusica);
    }

    mostrarPelicula(){
        sugerencias.mostrandoPelicula(videoPelicula);
    }

    mostrarSeries(){
        sugerencias.mostrandoSeries(videoSerie);
    }
}

class Musica extends Video {
    constructor(videoMusica){
        super(videoMusica);
    }

    mostrarMusica(){
        sugerencias.mostrandoMusica(this.videoMusica);
    }
}

class Pelicula extends Video {
    constructor(videoPelicula){
        super(videoPelicula);
    }

    mostrarPelicula(){
        sugerencias.mostrandoPelicula(videoPelicula);
    }
}

class Serie extends Video {
    constructor(videoSeries){
        super(videoSeries);
    }

    mostrarSeries(){
        sugerencias.mostrandoSeries(videoSerie);
    }
}

let musica = new Musica(videoMusica);
musica.mostrarMusica();
let pelicula = new Pelicula(videoPelicula);
pelicula.mostrarPelicula();
let serie = new Serie(videoSerie);
serie.mostrarSeries();