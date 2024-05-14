document.getElementById("button").onclick=function(){

fetch("https://pizza.kando-dev.eu/Pizza")
.then (function(res) {
    return res.json();})
.then (function (adatok){
    console.log(adatok);
    for(const data of adatok){
        document.getElementById("datas").innerHTML+=data.name;
    }
    })
}

function sendRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log()
            console.log( JSON.parse(xhr.responseText));
            let adatok = JSON.parse(xhr.responseText);
            let contenttHTML =document.getElementById("card_with_data")
            for (let i = 0; i < adatok.length; i++) {
                contenttHTML.innerHTML += ` <div class="card" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">${adatok[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${adatok[i].location}</h6>
                    <p class="card-text"Minimum éjszakák">${adatok[i].minimum_nights}</p>
                    <p Host weboldal:>${adatok[i].hostname}</p>
                    <p Éjszaka/fő:>${adatok[i].price}Ft/fő</p>
                </div>
                
                </div>`

            }

            `id: 1
            name: "Példa 1"
            hostname: "booking.com"
            location: "Miskolc"
            minimum nights: "2éjszaka"`
            
            
        }
    };
    xhr.open("GET", url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();
}




function AllData() {
    fetch("https://pizza.kando-dev.eu/Pizza")
.then(function(adatok) {
   return adatok.json()
}).then(function (adatok) {
    let contenttHTML =document.getElementById("card_with_data")
    for (let i = 0; i < adatok.length; i++) {
        contenttHTML.innerHTML +=  <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">${adatok[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${adatok[i].location}</h6>
            <p class="card-text">${adatok[i].minimum_nights}</p>
            <p Host >${adatok[i].hostname}</p>
            <p>${adatok[i].price}Ft/fő</p>
        </div>
        
        </div>

    }

});

}
