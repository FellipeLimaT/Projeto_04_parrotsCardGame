//** Prompt para saber quantas cartas tem o jogo */
let quantidadeCartas = Number(
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
  
  //** Array que receberá os gifs */
  const sorteio = [];
  const addCards = document.querySelector(".conteudo");
  function comparador() {
    return Math.random() -0.5;
  }
  
  //** Função para embaralhar a posição dos gifs na hora distribuição das cartas*/
  function shuffleCards() {
    for (let i = 0; sorteio.length < quantidadeCartas; i++) {
      sorteio.push(gifs[i]);
    }
  
    sorteio.sort(comparador);
  }

  shuffleCards();
   
  
    //** Distribuição de cards */
  
    for (let i = 0; i < quantidadeCartas; i++) {
      addCards.innerHTML += `
              <div class="card" onclick="memoryCard(this)" >
                  <div class="front-face face">
                      <img src="/images/front.png"> 
                  </div>
                  <div class="back-face face">
                      <img id="figura${i}" src="${sorteio[i]}">
                  </div>                           
              </div>
              `;
    }
  

  const listCards = document.querySelectorAll(".card");
  
  let firstCard = {clicado: null, image: null};
  let secondCard = {clicado: null, image: null};

  function memoryCard(elemento){

    let photo = document.getElementById('figura').src;
    console.log("firstCard", firstCard)
    console.log("secondCard", secondCard)
    
    if (firstCard.clicado === null){
      console.log("cheguei aqui 2")
      firstCard.clicado = elemento;
      firstCard.image = photo;
      
      flipCard(elemento);

    } else if(secondCard.clicado === null){
      console.log("cheguei aqui 3")
      secondCard.clicado = elemento;
      secondCard.image = photo;

      flipCard(elemento);

      compareCards(firstCard, secondCard);
    }
    
  }
  
  function compareCards(firstCard, secondCard){
    
    if(firstCard.image !== secondCard.image){
      firstCard.document.querySelector.remove(".flip");
      secondCard.document.querySelector.remove(".flip");
    };
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
    
      
      if (elemento.classList.contains("flip")) {
        
        
        //elemento.classList.remove("flip");
        //elemento.children[0].classList.remove("flip");
        //elemento.children[1].classList.remove("flip");
      } else {
        elemento.classList.add("flip");
        elemento.children[0].classList.add("flip");
        elemento.children[1].classList.add("flip");
      }
  
      
    }
    
 
  