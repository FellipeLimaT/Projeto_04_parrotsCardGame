//** Prompt para saber quantas cartas tem o jogo */

// Contagens
let quantidadeCartas = 0;
let quantidadeJogadas = 0
let quantidadeAcertos = 0
let firstTime = true

//** Array dos gifs */
const gifs = [
  "images/bobrossparrot.gif",
  "images/bobrossparrot.gif",
  "images/explodyparrot.gif",
  "images/explodyparrot.gif",
  "images/fiestaparrot.gif",
  "images/fiestaparrot.gif",
  "images/metalparrot.gif",
  "images/metalparrot.gif",
  "images/revertitparrot.gif",
  "images/revertitparrot.gif",
  "images/tripletsparrot.gif",
  "images/tripletsparrot.gif",
  "images/unicornparrot.gif",
  "images/unicornparrot.gif"
];

let sorteio = [];
let addCards = document.querySelector(".conteudo");


function restartGame(){
  document.getElementById('conteudo').innerHTML = "";
  console.log(document.getElementById('conteudo'))
  reinicio();
  quantidadeCartas = 0;
  quantidadeJogadas = 0
  quantidadeAcertos = 0
  firstTime = true
  sorteio = [];
  addCards = document.querySelector(".conteudo");

  startGame();
  shuffleCards();
}


function startGame(){ 
  quantidadeCartas = Number(
    prompt("Com quantas cartas você quer jogar? (Opções: 4, 6, 8, 10, 12 e 14)")
  );

  while (
    quantidadeCartas % 2 !== 0 ||
    quantidadeCartas > 14 ||
    quantidadeCartas < 4
  ) {
    quantidadeCartas = Number(
      prompt("Com quantas cartas você quer jogar? (Opções: 4, 6, 8, 10, 12 e 14)")
    );
  }
  
  shuffleCards();
  
  for (let i = 0; i < quantidadeCartas; i++) {
    addCards.innerHTML += `
            <div class="${"div-"+i} card" onclick="memoryCard(this, ${i})" >
                <div class="front-face face">
                    <img src="/images/front.png"> 
                </div>
                <div class="back-face face">
                    <img id="${i}" src="${sorteio[i]}">
                </div>                           
            </div>
            `;
  }
}

startGame()

function comparador() {
  return Math.random() -0.5;
}

function shuffleCards() {
  for (let i = 0; sorteio.length < quantidadeCartas; i++) {
    sorteio.push(gifs[i]);
  }
  sorteio.sort(comparador);
}

let firstCard = {id: null, image: null};
let secondCard = {id: null, image: null};

function memoryCard(elemento, i){

  if (firstTime) {
    inicio()
    firstTime = false;
  }

  let photo = document.getElementById(i).src;

    if (firstCard.id === null){
      firstCard.id = '.div-'+i;
      firstCard.image = photo;
      
      flipCard(elemento);

    } else if(secondCard.id === null){
      secondCard.id = '.div-'+i;
      secondCard.image = photo;

      flipCard(elemento);

      compareCards(firstCard, secondCard);
    }
  
}

function promptRestart(){
  
  let respostaRestart = prompt("Gostaria de reiniciar a partida? (sim ou não)");
  
  while (
    respostaRestart !== "sim" &&
    respostaRestart !== "não"
    ) {
    respostaRestart = prompt("Gostaria de reiniciar a partida? (sim ou não)");
  }
  
  if(respostaRestart === "sim"){
    restartGame();
  }
}

function endGame() {
  if(quantidadeAcertos === quantidadeCartas / 2){
    parar();
    setTimeout(() => {alert(`Você ganhou em ${quantidadeJogadas} jogadas e seu tempo foi de ${minutos}:${segundos}:${centesimas} !` );}, 1000);
    setTimeout(() => {promptRestart()}, 1000);
  }
  
}

function resetVariaveis() {
  firstCard.id = null;
  firstCard.image = null;
  secondCard.id = null;
  secondCard.image = null;
}

function compareCards(firstCard, secondCard){
  if(firstCard.image !== secondCard.image){
    setTimeout(() => {resetCard(firstCard, secondCard)}, 1000);
    quantidadeJogadas += 2
  } else {
    document.querySelector(firstCard.id).removeAttribute("onclick");
    document.querySelector(secondCard.id).removeAttribute("onclick");
    resetVariaveis()
    quantidadeAcertos += 1
    quantidadeJogadas += 2
    endGame()
  }
}

function resetCard(firstCard, secondCard) {
  document.querySelector(firstCard.id).classList.remove("flip");
  document.querySelector(firstCard.id).children[0].classList.remove("flip");
  document.querySelector(firstCard.id).children[1].classList.remove("flip");
  document.querySelector(secondCard.id).classList.remove("flip");
  document.querySelector(secondCard.id).children[0].classList.remove("flip");
  document.querySelector(secondCard.id).children[1].classList.remove("flip");
  resetVariaveis()
}


function checkCards() {
  
  elemento = firstCard
  if(firstCard !== undefined){
    
    secondCard = elemento;
  }
  
  let Carta1 = firstCard.children[1];
  let Carta2 = secondCard.children[2];

  if(Carta1.document.querySelector(".scr") !==
      Carta2.document.querySelector(".scr")){

    elemento.classList.remove("flip");
    elemento.children[0].classList.remove("flip");
    elemento.children[1].classList.remove("flip");
  }else{
    firstCard = undefined;
    secondCard = undefined;
  }
}

function flipCard(elemento) {   
  if (!(elemento.classList.contains("flip"))) {
    elemento.classList.add("flip");
    elemento.children[0].classList.add("flip");
    elemento.children[1].classList.add("flip");
  }
}

// Cronometro
var centesimas = "00";
var segundos = "00";
var minutos = "00";
var horas = "00";

function inicio () {
    control = setInterval(cronometro,10);
}

function parar () {
    clearInterval(control);
}

function reinicio () {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = "00";
}

function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = ":"+segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = ""+minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
}
