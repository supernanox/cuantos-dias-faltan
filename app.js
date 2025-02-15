let dateFrom;
let dateTo;
let diferenciaEnMilisegundos;

dateFrom = Date.parse("2025-03-28T16:00:00.000-03:00");

function calularDiferenciaEnMilisegundos(){
    dateTo = Date.now();
    return (dateFrom - dateTo);
}

function calcularTiempoRestante(diferenciaEnMilisegundos) {
    let dias, horas, minutos, segundos;
    dias = Math.floor(diferenciaEnMilisegundos / 86400000);
    horas = Math.floor((diferenciaEnMilisegundos % 86400000) / 3600000);
    minutos = Math.floor(((diferenciaEnMilisegundos % 86400000) % 3600000) / 60000);
    segundos = Math.floor((((diferenciaEnMilisegundos % 86400000) % 3600000) % 60000) / 1000);

    return `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

function actualizarTiempo(){
    diferenciaEnMilisegundos = calularDiferenciaEnMilisegundos();
    let textoContador = document.getElementById("texto-contador");
    textoContador.innerHTML = calcularTiempoRestante(diferenciaEnMilisegundos);
}

setInterval(actualizarTiempo, 1000);









//segundos = 1000ms
//minutos = 60.000ms
//horas = 3.600.000
//horas = 86.400.000
//

