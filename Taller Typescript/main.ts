import { Serie, ej } from './Serie.js';
import { series } from './data.js';

let seriestable: HTMLElement = document.getElementById("series")!;
let avgText: HTMLElement = document.getElementById("Avg")!;
let cardText: HTMLElement = document.getElementById("info")!;
let showEvent: NodeListOf<HTMLElement>;

function load(): void {
    showEvent = document.querySelectorAll("#series tbody tr");
    showEvent.forEach(c => {
        c.onclick = (event) => {
            event.preventDefault();
            event.stopPropagation();
            showSerie(Number(c.id));
        }
    });
}

showSeries(series);
showSeasonAvg(series);

function showSeries(series: Serie[]): void {
    let tbodySerie = document.createElement("tbody");
    for (let serie of series) {
        tbodySerie.innerHTML +=
            `<tr name="click" id=${serie.id}>
                <td>${serie.id}</td>
                <td>${serie.nombre} <a href="${serie.url}" target="_blank"><small>(Ver sitio oficial)</small></a></td>
                <td>${serie.direccion}</td>
                <td>${serie.temporadas}</td>
            </tr>`;
    }
    seriestable.appendChild(tbodySerie);
    load();
}

function showSeasonAvg(series: Serie[]): void {
    let avg: number = 0;
    let tot: number = 0;
    for (let serie of series) {
        avg += serie.temporadas;
        tot++;
    }
    avgText.innerHTML = (series.length > 0) ? `<h2>Season Average ${avg / tot}</h2>` : "<h2>No hay series</h2>";
}

function showSerie(number: number): void {
    cardText.innerHTML = ''; // Limpiar contenido

    let serie = series[number - 1];
    cardText.innerHTML +=
        `<div class="card">
            <img class="card-img-top" src="${serie.imagen}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${serie.nombre}</h4>
                <p class="card-text">${serie.reseña}</p>
                <td>${serie.nombre}</td>
            </div>
        </div>`;
}

