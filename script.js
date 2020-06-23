// criar tabuleiro 6 X 7
// cada coluna é um array vazio
// início automático
// -- Eduardo

<<<<<<< HEAD
//const coluna = document.getElementsByClassName('column'); // variavel pegando as 7 colunas
//const divCell = document.getElementsByClassName('cell');// variavel pegando todas as celulas
=======
const coluna = document.getElementsByClassName('column'); // variavel pegando as 7 colunas
//const divCell = document.getElementsByClassName('cell'); // variavel pegando todas as celulas
>>>>>>> 0a0ef362abf120aab9cb56c8819c43b5fe3a7484

function table() {
   for (let i = 1; i <=7; i++) {
      let arrayColuna = Array();

<<<<<<< HEAD
      let main = document.getElementById('main')
      const divColuna = document.createElement("div");
      divColuna.className = "column"
      divColuna.id = i
      divColuna.target = main;
=======
      for (let y = 0; y <7; y++) {
         arrayColuna.push(y)

         let divCell = document.createElement('div');
         divCell.className = "blocos";
         arrayColuna.appendChild(divCell)
         // divCell.style.backgroundColor = "gray"


         //console.log(coluna)
         
      }
   }
}
table()

// criar fichas pretas e vermelhas
function createChip() {

// Retorna ficha vermelha se receber 'red' ou preta se receber 'black 
function createChip(nextPlayer) {
      if(nextPlayer === 'red'){
         console.log("red")
         let newChip = document.createElement("div");
         newChip.classList.add("red");
         return newChip;
      } else if(nextPlayer === 'black'){
         let newChip = document.createElement("div");
         newChip.classList.add("black"); 
         return newChip;
      }
}
const coluna1 = document.getElementById("1");
const coluna2 = document.getElementById("2");
const coluna3 = document.getElementById("3");
const coluna4 = document.getElementById("4");
const coluna5 = document.getElementById("5");
const coluna6 = document.getElementById("6");
const coluna7 = document.getElementById("7");
>>>>>>> 0a0ef362abf120aab9cb56c8819c43b5fe3a7484



<<<<<<< HEAD
      for (let y = 0; y < 6; y++) {
         arrayColuna.push(y)
=======
// criar player 1 e player 2
const player1 = 'black' //1
const player2 = 'red' //2
let alternar = player1

let placar = [
   [],
   [],
   [],
   [],
   [],
   [],
   []
]

const jogada = document.getElementsByClassName('column')

for(coluna of jogada){
   coluna.addEventListener('hover', function('Event'){
      //Inserir ficha na coluna
      if (coluna.lenght <= 6){
         "Variável da célula".appendChild("Variável da ficha")
         
      if (alternar == player1){
         //Registrar no array Placar 1 p/ Black
      } else if (alternar == player2){
         //Registrar no array Placar 1 p/ Red
      }
         switchPlayer()
      }
      
   })
}

function switchPlayer() {
   //Alteração de CSS p/ identificação visual.
   if (alternar == player1){      
         "Variável da ficha".style.background-color = player2
   } else if (alternar == player2){
         "Variável da ficha".style.background-color = player1
   }
   
}
// rodada: selecionar coluna > insere uma ficha > altera jogador [1,0,1,1...]
// -- Gustavo


// condição de vitória: 4 em linha (h, v, d para cima, d para baixo)
function endGame() {
   // return "vitória: Player 1" / "vitória Player 2" / "Empate"
}
// h -> for(cada array){arrayX[y] === arrayX+1[y] arrX+2..}
// fim do jogo: vitória player 1 - vitória player 2
// empate (acabaram espaços e não atingiu condição de vitória)
>>>>>>> 0a0ef362abf120aab9cb56c8819c43b5fe3a7484

         const divLinha = document.createElement("div");
         divLinha.className = "celulas";
         coluna.appendChild(divLinha);

      }
      console.log(arrayColuna)   
   }
}

table()


<<<<<<< HEAD

=======
   let cells = document.getElementsByClassName('cell');
   for (cell of cells) {
      cell.classList.remove('chip', 'blue', 'red');
   }
   // limpar arrays
   table();
};
>>>>>>> 0a0ef362abf120aab9cb56c8819c43b5fe3a7484
