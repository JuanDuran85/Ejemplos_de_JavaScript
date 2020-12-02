let iifeGlobal = (()=>{

    let conectApi = async (url) => {
        try {
            let result = await fetch(url);
            let data = await result.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    };
    return {
        getData: (params) => conectApi(params)
    }
    
})();

Promise.all([iifeGlobal.getData("https://www.cheapshark.com/api/1.0/stores"), iifeGlobal.getData("https://www.cheapshark.com/api/1.0/deals")]).then(resultado => {
    console.log(resultado)
    resultado[1].forEach((element) => {
        games.innerHTML += `
            <section class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div class="card my-5">
                    <img src="${element.thumb}" class="card-img-top" alt="${element.gameID}" width="100%" height="100%">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.releaseDate}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${element.normalPrice}</li>
                        <li class="list-group-item">${element.dealRating}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </section>
        `;
    });
    resultado[0].forEach((element) => {
        store.innerHTML += `
            <section class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card my-3">
                    <img src="https://www.cheapshark.com/${element.images.logo}" class="card-img-top" alt="${element.gameID}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${element.storeName}</h5>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </section>
        `;
    });
});
