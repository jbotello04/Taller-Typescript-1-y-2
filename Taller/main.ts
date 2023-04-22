import {Serie, ej} from './Serie';
import {series} from './data';

const seriestable = document.querySelector("#series")!;
const avgText = document.querySelector("#Avg")!;
const cardText = document.querySelector("#info")!;

let showEvent:NodeListOf<HTMLElement>;

function load():void{
    showEvent = document.querySelectorAll(".click")!;
    showEvent.forEach(c => {c.addEventListener("click", () => showSerie(Number(c.id)))});
}

showSeries(series);
showSeasonAvg(series);

function showSeries(series: Serie[]): void{
    const tbodySerie = document.createElement("tbody");
    for (const serie of series){
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

function showSeasonAvg(series: Serie[]): void{
    let avg = 0;
    let avgAdd = document.createElement("h2");
    let tot = 0;
    for(const serie of series){
        avg += serie.temporadas;
        tot++; 
    }
    avgAdd.innerHTML = (series.length > 0) ? `Season Average: ${avg/tot}` : "No hay series"; 
    avgText.appendChild(avgAdd);
}

function showSerie(number: number): void{
    console.log("Mostrando serie...");
    while (cardText.firstChild) {
        cardText.removeChild(cardText.firstChild);
    }

    const serie = series[number-1];
    const cardBody = document.createElement("div");
    cardBody.innerHTML = `
        <img class="card-img-top" src="${serie.imagen}" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${serie.nombre}</h4>
            <p class="card-text">${serie.reseña}</p>
            <a href="${serie.url}" >${serie.url}</a>
        </div>    
    ` ;
    cardText.appendChild(cardBody);
}
