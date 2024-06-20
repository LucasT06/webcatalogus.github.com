console.log("hoi");
const AbDekejson = document.querySelector(".deke-container");


fetch('http://localhost:3000/arenabreakout/deke')
.then(response => response.json())
.then(data => showMarkt(data));


function showMarkt(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        AbDekejson.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <p>${dataJson.price} price</p>
            <img src="${dataJson.img}" 
        </div>`
    }
}



console.log("hoi");
const Abbundeljson = document.querySelector(".bundels-container");


fetch('http://localhost:3000/arenabreakout/bundels')
.then(response => response.json())
.then(data => showMarkt(data));


function showMarkt(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        Abbundeljson.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <p>${dataJson.price} price</p>
            <img src="${dataJson.img}" 
        </div>`
    }
}
console.log("hoi");
const Abmbundelsjson = document.querySelector(".bundels-container");


fetch('http://localhost:3000/arenabreakout/merch')
.then(response => response.json())
.then(data => showMarkt(data));


function showMarkt(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const dataJson = data[i];
        Abmerchjson.innerHTML +=  
        `<div class="card">
            <h3>${dataJson.title}</h3>
            <p>${dataJson.price} price</p>
            <img src="${dataJson.img}" 
        </div>`
    }
}

console.log("hoi");
const Abmerchjson = document.querySelector(".bundels-container");


