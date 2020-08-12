const baseUrl = 'https://mindicador.cl/api';

const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}

const getDolar = async (indicador) => {
    const url = `${baseUrl}/${indicador}`;
    return request(url);
}
const getEuro = async (indicador) => {
    const url = `${baseUrl}/${indicador}`;
    return request(url);
}
const getUf = async (indicador) => {
    const url = `${baseUrl}/${indicador}`;
    return request(url);
}
const getUtm = async (indicador) => {
    const url = `${baseUrl}/${indicador}`;
    return request(url);
}
const getIpc = async (indicador) => {
    const url = `${baseUrl}/${indicador}`;
    return request(url);
}

const indicadores = ['dolar','euro','uf','ipc','utm'];
Promise.all([getDolar(indicadores[0]), getEuro(indicadores[1]), getUf(indicadores[2]), getUtm(indicadores[3]),  getIpc(indicadores[4])])
    .then(resp => {
        console.log(resp)
        resp.forEach((element) => {
            console.log(`Moneda: ${element.codigo}, Fecha: ${element.serie[0].fecha}, Valor: ${element.serie[0].valor}`)
        });
    })
    .catch(err => console.log('err', err))
