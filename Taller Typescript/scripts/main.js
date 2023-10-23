import { series } from './data.js';

var seriestable = document.getElementById("series");
var avgText = document.getElementById("Avg");
var cardText = document.getElementById("info");

function showSeries(series) {
    var tbodySerie = document.createElement("tbody");
    series.forEach(serie => {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="${serie.url}">${serie.nombre}</a></td>
            <td>${serie.direccion}</td>
            <td>${serie.temporadas}</td>`;
        row.addEventListener('click', function() {
            showSerie(serie.id);
        });
        tbodySerie.appendChild(row);
    });
    seriestable.appendChild(tbodySerie);
}

function showSeasonAvg(series) {
    let avg = 0;
    series.forEach(serie => {
        avg += serie.temporadas;
    });
    avgText.innerHTML = series.length ? `<h2>Season Average ${avg / series.length}</h2>` : "<h2>No hay series</h2>";
}

function showSerie(number) {
    cardText.innerHTML = '';  
    let serie = series[number - 1];
    cardText.innerHTML = `
        <img class="card-img-top" src="${serie.imagen}" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${serie.nombre}</h4>
            <p class="card-text">${serie.reseña}</p>
            <a href="${serie.url}">${serie.url}</a>
        </div>`;

    cardText.querySelector("a").addEventListener('click', function(event){
        event.preventDefault();
    });
}

showSeries(series);
showSeasonAvg(series);
