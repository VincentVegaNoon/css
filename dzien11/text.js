//1. pobieramy wszytkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b okreslamy potrzebne dane

let textSize = 16; //pocztkowa wielkosc font size dla p


//3. Okreslenie akcji - napisanie funkcji

function textIncrease() {
    //console.log("klik!")
    textSize++;
    text.style.fontSize = textSize + "px";
    
 }


 //2. Ustawienie nasłuchiwania na przyciskach na klikniecie

btnIncrease.addEventListener('click', textIncrease);