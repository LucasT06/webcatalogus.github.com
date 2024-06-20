// Selecteer de HTML-elementen waarin de gegevens worden weergegeven.
const merchContainer = document.querySelector(".merch-container");
const infocontainer = document.querySelector('.info-container');
const bundelscontainer = document.querySelector('.bundel-container')

// Haal gegevens op van het 'palworld/merch' endpoint en roep vervolgens de 'showMarkt' functie aan om de gegevens weer te geven.
fetch('http://localhost:3000/palworld/merch')
    .then(response => response.json())
    .then(data => showMarkt(data));

 
function showMarkt(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        // Voeg HTML-code toe aan de 'merchContainer' om elk item weer te geven.
        merchContainer.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <img src="${dataJson.img}" 
            h3><p></p>${dataJson.euro}</h3>           
        </div>`
    }
}

// Haal gegevens op van het 'palworld/info' endpoint en roep vervolgens de 'showinfo' functie aan om de gegevens weer te geven.
fetch('http://localhost:3000/palworld/info')
    .then(response => response.json())
    .then(data => showinfo(data));

function showinfo(data) {
    for (let i = 0; i < data.length; i++) {
        const dataJson = data[i];
        // Voeg HTML-code toe aan de 'infocontainer' om elk item weer te geven.
        infocontainer.innerHTML +=
            `<div class="card">
            <h3>${dataJson.title}</h3>
            <img src="${dataJson.img}" 
            <h3>${dataJson.Text}<h3>
        </div>`;
    }
}

// Haal gegevens op van het 'palworld/bundels' endpoint en roep vervolgens de 'showbundel' functie aan om de gegevens weer te geven.
fetch('http://localhost:3000/palworld/bundels')
    .then(response => response.json())
    .then(data => showbundel(data));


function showbundel(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        // Voeg HTML-code toe aan de 'bundelscontainer' om elk item weer te geven.
        bundelscontainer.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <img src="${dataJson.img}" 
            h3> <p></p>${dataJson.euro}</h3>           
        </div>`
    }
}
