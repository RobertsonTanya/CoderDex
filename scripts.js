var currentUsername = '';
var cardsDiv = document.getElementById("cards");

function getUsername(element) {
    document.getElementById("searchBtn").disabled = false;
    currentUsername = element.value;
}

function makeCoderCard(data) {
    var response = `<div class="card">
                        <img src="${data.avatar_url}" alt="${data.login}"/>
                        <div class="info">
                            <h3>${data.login} - ${data.name}</h3>
                            <p>Location: ${data.location}</p>
                            <p>Repositories: ${data.public_repos}</p>
                        </div>
                    </div>`;
    return response;
}

async function search() {
    var response = await fetch('https://api.github.com/users/' + currentUsername);
    var coderData = await response.json();
    console.log(cardsDiv.innerHTML);
    if(coderData.login != undefined){
        cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
    }
}