// hier haalt hij de class op
const messageButton = document.querySelector(".send");
const person = document.querySelector(".name");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phone-number");
const message = document.querySelector(".message");



function inputData() {
    // hier is een patroon waar hij de email contoleerd op alle tekens
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(person.value == "") {
        person.classList.add("red");
        person.classList.remove("green");
    } else {
        person.classList.remove("red");
        person.classList.add("green");
    }if (emailPattern.test(email.value)) {
        email.classList.remove("red");
        email.classList.add("green"); 
    } else {
        email.classList.add("red");
        email.classList.remove("green");
    } if (message.value == "") {
        message.classList.add("red");
        message.classList.remove("green");
    } else {
        message.classList.remove("red");
        message.classList.add("green");
    }
}

// als er op de knop gedrukt word kijt die of alles is ingevuld
messageButton.addEventListener('click', function () {
    inputData()  
    // als alles is in gevuld stuurt die de data naar de server
    if(person.classList.contains("green") && email.classList.contains("green") && message.classList.contains("green")){
        postMessage();
    console.log("send");
    // dit is een reset van de data
    person.value = "";
    email.value = "";
    phoneNumber.value = "";
    message.value = "";
    }
});

// hier wordt de data gestuurt en als het is gelukt laat die dat zien via een alert
async function postMessage() {
        const rawResponse = await fetch('http://localhost:3000/sendMessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: person.value, email: email.value, phoneNumber: phoneNumber.value, message: message.value})
        });
        const content = await rawResponse.json();

        console.log(rawResponse);
        if (content.success) {
            alert("het is gelukt");
        } else {
            alert('Het ging niet goed, probeer het later nog eens.');
        }
}