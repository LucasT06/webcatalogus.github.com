// hier haalt hij de class op
const marktContainer = document.querySelector(".markt-container");
const merchContainer = document.querySelector(".merch-container");
const bundelsContainer = document.querySelector(".bundels-container");


// de fatch haalt de Json data op van de market page
fetch('http://localhost:3000/waframe/market')
.then(response => response.json())
.then(data => showMarktCard(data));

// de function maakt de cards aan met de Json data
function showMarktCard(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        marktContainer.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <img src="${dataJson.img}" alt="${dataJson.img}">
            <p>${dataJson.platinum} platinum</p>
            <button class="name">voeg toe</button>
        </div>`
    }
}

// de fatch haalt de Json data op van de bundel page
fetch('http://localhost:3000/waframe/bundels')
.then(response => response.json())
.then(data => showBundelCard(data));


// de function maakt de cards aan met de Json data
function showBundelCard(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        bundelsContainer.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <img src="${dataJson.img}" alt="${dataJson.img}">
            <p>&euro; ${dataJson.euro}</p>
            <button class="name">voeg toe</button>
        </div>`
    }
}

// de fatch haalt de Json data op van de merch page
fetch('http://localhost:3000/waframe/merch')
.then(response => response.json())
.then(data => showMerchCard(data));


// de function maakt de cards aan met de Json data
function showMerchCard(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        merchContainer.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <img src="${dataJson.img}" alt="${dataJson.img}">
            <p>&euro; ${dataJson.euro}</p>
            <button class="name">voeg toe</button>
        </div>`
    }
}