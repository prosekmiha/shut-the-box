let playerNumberTxt = document.querySelector('.playerNumberTxt')
let kocka1 = document.querySelector('#kocka1');
let kocka2 = document.querySelector('#kocka2');
let loputica = document.querySelectorAll('.loputica');
let metBtn =  document.querySelector('.metBtn');

let icantBtn = document.querySelector('.icantBtn');

let isPcPlaying = sessionStorage.getItem("isPcPlaying")

let stKocka1;
let stKocka2;
let vsota = 78;
let preTocke = vsota;
let playersCounter = 1;
let players = parseInt(sessionStorage.getItem('players'));
let rezultat = [];

playerNumberTxt.textContent = "Igralec 1";




function btnClicked(id) {
  if(loputica[id-1].style.backgroundColor == "red") {
    loputica[id-1].style.backgroundColor = "white";
    preTocke = preTocke + parseInt(id);
  }else {
    loputica[id-1].style.backgroundColor = "red";
    preTocke = preTocke - parseInt(id);
  }
  
  
  console.log(preTocke);

}


function metKocke() {
  stKocka1 = Math.floor(Math.random() * 6) + 1;
  stKocka2 = Math.floor(Math.random() * 6) + 1;
  kocka1.textContent = stKocka1;
  kocka2.textContent = stKocka2;
  
}



icantBtn.addEventListener('click', function() {
  sessionStorage.setItem("Igralec " + playersCounter, preTocke)
  rezultat.push(preTocke);
  if(playersCounter == players) {
    if(isPcPlaying == "yes"){

      setInterval(racunalnik, 2000)
    }else{
      window.open("endgame.html","_self") 
    }    




      

  }else{
      
      playersCounter++
      playerNumberTxt.textContent = "Igralec " + playersCounter;
  }
  
  
  
  preTocke = vsota; 
  for(let i = 0; i < 12; i++) {
      loputica[i].style.backgroundColor = "white";
  }
})





function racunalnik(){
  metBtn.style.visibility = "hidden"
  icantBtn.style.visibility = "hidden"
  metKocke();
    let array = [];
  playerNumberTxt.textContent = "Računalnik";

  for(let i = 0; i < 12; i++) {
    if(loputica[i].style.backgroundColor != "red") {
      let value = parseInt(loputica[i].textContent);
      array.push(value)   
    } 
  }
  console.log(array)
    
    
    let rezultat = [];


    
    
    
    rezultat = racIzbira(stKocka1, stKocka2, array);
    console.log(rezultat)


    for(let x = 0; x < rezultat.length; x++){
      for(let y = 0; y < 12; y++) {
        if(parseInt(loputica[y].textContent) == parseInt(rezultat[x])) {
          loputica[y].style.backgroundColor = "red";
        }
      }
      console.log(rezultat[x])
    }
    
}




function racIzbira(kocka1, kocka2, array) {

  let kocka = kocka1 + kocka2;

  let deli = Math.floor(Math.random() * 3) + 1;
  console.log(deli)

  let array2 = [];


  for(let i = 0; i < 20; i++){
      
      if(deli == 1) {
          array.forEach((nmb) => {
              if(parseInt(nmb) == parseInt(kocka)){
                  rezultat = [nmb]
              }else{
                rezultat = undefined;
              }
          })
          if(rezultat == undefined) {
              deli = Math.floor(Math.random() * 3) + 1;
          }
      }
      if(deli == 2) {

          array.forEach((nmb) => {
              if(nmb <= kocka && nmb != kocka - nmb && array.includes(kocka - nmb)){
                  array2.push([nmb,kocka - nmb]);

              }
          })
          rezultat = array2[Math.floor(Math.random() * array2.length)]
          if(rezultat == undefined) {
              deli = Math.floor(Math.random() * 3) + 1;
          }


      }
      if(deli == 3) {
          let array3 = array;
          let vsota = 0;
          let array4 = [];
          
          for(let x = 0; x < array3.length; x++) {
              for(let y = 0; y < array3.length; y++) {
                  for(let z = 0; z < array3.length; z++) {
                      if(array3[x] != array3[y] && array3[x] != array3[z] && array3[y] != array3[z]) {
                          vsota = array[x] + array[y] + array[z]
                          if(vsota == kocka){
                              array4.push([array[x], array[y], array[z]])
                              
                          }
                      }
                  }
              }
              
          }
          rezultat = array4[Math.floor(Math.random() * array4.length)]
          if(rezultat == undefined) {
              deli = Math.floor(Math.random() * 3) + 1;
          }
      }

  }
  if(rezultat == undefined) {
    let racVsota = 78;
    array.forEach((nmb) => {
      racVsota = racVsota - nmb
    })
    sessionStorage.setItem("Računalnik", 78 - racVsota)
    window.open("endgame.html","_self") 

  }
  else{

    return rezultat;
  }


}