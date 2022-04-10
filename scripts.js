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
  
  function comparador() {
    return Math.floor(Math.random() * quantidadeCartas);
  }
  
  //** Função para embaralhar a posição dos gifs na hora distribuição das cartas*/
  function shuffleCards() {
    for (let i = 0; sorteio.length < quantidadeCartas; i++) {
      sorteio.push(gifs[i]);
    }
  
    sorteio.sort(comparador);
  }
  
  const addCards = document.querySelector(".conteudo");
  
  
    //** Distribuição de cards */
  
    for (let i = 0; i < quantidadeCartas; i++) {
      addCards.innerHTML += `
              <div class="card" onclick="flipCard(this)" >
                  <div class="front-face face">
                      <img src="/images/front.png"> 
                  </div>
                  <div class="back-face face">
                      <img src="${gifs[i]}">
                  </div>                           
              </div>
              `;
    }
  
    //** Embaralhar cards */
  
    shuffleCards();
  
  
  //** Fim da Distribuição de Cards */
  
  const listCards = document.querySelectorAll(".card");
  
  let firstCard;
  let secondCard;
  
  function flipCard(elemento) {
    if (elemento.classList.contains("flip")) {
      elemento.classList.remove("flip");
      elemento.children[0].classList.remove("flip");
      elemento.children[1].classList.remove("flip");
    } else {
      elemento.classList.add("flip");
      elemento.children[0].classList.add("flip");
      elemento.children[1].classList.add("flip");
      firstCard = elemento;
    }
  
    function checkCards() {}
  
    function disableCards() {}
  
    function resetCards(isMatch = false) {}
  }
  