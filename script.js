// document.getElementById("button").onclick=function(){

// fetch("https://pizza.kando-dev.eu/Pizza")
// .then (function(res) {
//     return res.json();})
// .then (function (adatok){
//     console.log(adatok);
//     for(const data of adatok){
//         document.getElementById("datas").innerHTML+=data.name;
//     }
//     })
// }

document.getElementById('datas').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://pizza.kando-dev.eu/Pizza') 
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Hiba történt:', error));
}

function displayData(data) {
    const card = document.getElementById('card_with_data');
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.description}</p>
        </div>
    `;
}

