"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const seriestable = document.querySelector("#series");
const avgText = document.querySelector("#Avg");
const cardText = document.querySelector("#info");
let showEvent;
function load() {
    showEvent = document.querySelectorAll(".click");
    showEvent.forEach(c => { c.addEventListener("click", () => showSerie(Number(c.id))); });
}
showSeries(data_1.series);
showSeasonAvg(data_1.series);
function showSeries(series) {
    const tbodySerie = document.createElement("tbody");
    for (const serie of series) {
        tbodySerie.innerHTML +=
            `<tr class="click" id="${serie.id}">
            <td>${serie.id}</td>
            <td><a href="${serie.url}">${serie.nombre}</a></td> 
            <td>${serie.productora}</td>
            <td>${serie.temporadas}</td>
        </tr>`;
        console.log(serie);
        console.log(serie.imagen);
    }
    seriestable.appendChild(tbodySerie);
    load();
}
function showSeasonAvg(series) {
    let avg = 0;
    let avgAdd = document.createElement("h2");
    let tot = 0;
    for (const serie of series) {
        avg += serie.temporadas;
        tot++;
    }
    avgAdd.innerHTML = (series.length > 0) ? `Season Average: ${avg / tot}` : "No hay series";
    avgText.appendChild(avgAdd);
}
function showSerie(number) {
    console.log("Mostrando serie...");
    while (cardText.firstChild) {
        cardText.removeChild(cardText.firstChild);
    }
    const serie = data_1.series[number - 1];
    const cardBody = document.createElement("div");
    cardBody.innerHTML = `
        <img class="card-img-top" src="${serie.imagen}" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${serie.nombre}</h4>
            <p class="card-text">${serie.reseña}</p>
            <a href="${serie.url}" >${serie.url}</a>
        </div>    
    `;
    cardText.appendChild(cardBody);
}
