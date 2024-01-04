let newGameBtn = document.querySelector('.newGameBtn');
let winnerTxt = document.querySelector('.winner')

let rezultat = sessionStorage.getItem('rezultat');

let players = sessionStorage.getItem('players');
let isPcPlaying = sessionStorage.getItem('isPcPlaying')

let winner = [];


for(let i = 1; i <= players; i++) {
    let playerScore = sessionStorage.getItem("Igralec " + i);
    winner.push(["Igralec " + i, playerScore])
    

    const node = document.createElement("p");
    const textnode = document.createTextNode("Igralec " + i + " - " + playerScore);
    node.appendChild(textnode);
    document.querySelector(".score").appendChild(node);
}

if(isPcPlaying == "yes") {
    const node = document.createElement("p");
    const textnode = document.createTextNode("Računalnik - " + sessionStorage.getItem("Računalnik"));
    node.appendChild(textnode);
    document.querySelector(".score").appendChild(node);
    winner.push(["Računalnik", sessionStorage.getItem("Računalnik")])
}

let igralci = [];
let točke = [];
for(let i = 0; i < winner.length; i++) {
    igralci.push(winner[i][0])
    točke.push(parseInt(winner[i][1]))
}
let x = 0;
for(let i = 0; i < točke.length; i++) {

    if(Math.min.apply(Math, točke) == točke[i]){
        winnerTxt.textContent = "Zmagovalec je " + igralci[i];
        x++;
        
    }
    if(x > 1) {
        winnerTxt.textContent = "Rezultat je neodločen.";
    }

}

