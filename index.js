let playersNumber = document.querySelector('.playersNumber')
let startBtn = document.querySelector('.startBtn')
let racBtn = document.querySelector('.racBtn')
let playersNumberDiv = document.querySelector('.playersNumberDiv')
let potrdi = document.querySelector('.potrdi')
let pravilaDiv = document.querySelector('.pravila')

startBtn.addEventListener('click', function() {
    let players = 1;

    sessionStorage.setItem('players', players)
    sessionStorage.setItem('isPcPlaying', "no")
})

racBtn.addEventListener('click', function() {
    let players = 1;
    sessionStorage.setItem('isPcPlaying', "yes")
    sessionStorage.setItem('players', players)
})

potrdi.addEventListener('click', function() {
    let players = playersNumber.value;
    if(players.length == 0) {
        players = 2;
        alert("Prazen vnos!")
    }else{
        window.open("game.html","_self") 
    }
    

    sessionStorage.setItem('players', players)
    sessionStorage.setItem('isPcPlaying', "no")
})

function playersInput() {
    playersNumberDiv.style.visibility = "visible";
}

function pravila() {
    pravilaDiv.style.visibility = "visible";
}

function zapri() {
    pravilaDiv.style.visibility = "hidden";
}