import{Serie,ej} from './Serie.js'; 
import{series} from './Data.js';

let seriestable: HTMLElement = document.getElementById("series")!;
let avgText : HTMLElement = document.getElementById("Avg")!;
let cardText: HTMLElement = document.getElementById("info")!;
// Esto es taller 2 
let showEvent:NodeListOf< HTMLElement>; 

function load():void{
    showEvent= document.getElementsByName("click")!;
    showEvent.forEach(c=> {c.onclick= () =>showSerie(Number( c.id))} ); 
}
//Esto es taller 2 

showSeries(series);
showSeasonAvg(series);

function showSeries(series :Serie[]):void{
    let tbodySerie = document.createElement("tbody");
    for (let serie of series){
        tbodySerie.innerHTML+=
        `<tr name="click" id=${serie.id} >
         <td>${serie.id}</td>
         <td><a href="${serie.url}"> ${serie.nombre}</a></td> 
         <td>${serie.productora}</td>
         <td>${serie.temporadas}</td>
         </tr>`
        console.log(serie);
        console.log(serie.imagen);
        
    }
    seriestable.appendChild(tbodySerie);
    load();
}

function showSeasonAvg(series:Serie[]):void{
    let avg: number = 0; 
    let avgAdd = document.createElement("h2");
    let tot: number=0;
    for(let serie of series){
        avg+= serie.temporadas;
        tot++; 
    }
    avgAdd.innerHTML= (series.length>0)?`Season Average ${avg/tot}`: "No hay series"; 
    avgText.appendChild(avgAdd);
}
//Esto es parte del taller 2
//siu

function showSerie(number:number):void{
    console.log("asdibasda");
    cardText.childNodes.forEach(c=>{cardText.removeChild(c);})
    
    let serie=series[number-1];
    let cardBody = document.createElement("div");
    cardBody.innerHTML=`
    <img class="card-img-top" src=${serie.imagen} alt="Card image">
    <div class="card-body">
        <h4 class="card-title">${serie.nombre}</h4>
        <p class="card-text">${serie.reseña}</p>
        <a href="${serie.url}" >${serie.url}</a>
    </div>    
    ` ;
    cardText.appendChild(cardBody);
}

