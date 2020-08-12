const lugares = (()=>{
    return {
        salidaCine: () => {
            return "Cine";
        },
        salidaTeatro: () => {
            return "Teatro";
        },
        salidaRecital: () => {
            return "Recital";
        },
        salidaConcierto: () => {
            return "Concierto";
        },
        noSeleccionado: () => {
            return "Debe seleccionar una opción";
        },
    }
})();

salida.addEventListener('change',function () {
    switch (salida.value) {
        case "cine":
                resultado.innerHTML = lugares.salidaCine();
            break;
            case "recital":
                resultado.innerHTML = lugares.salidaRecital();
            break;
        case "teatro":
                resultado.innerHTML = lugares.salidaTeatro();
            break;
            case "concierto":
                resultado.innerHTML = lugares.salidaConcierto();
                break;
            default:
                resultado.innerHTML = lugares.noSeleccionado();
            break;
    }
})