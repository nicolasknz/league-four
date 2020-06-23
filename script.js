// criar tabuleiro 6 X 7
// cada coluna é um array vazio
// início automático
// -- Eduardo

function table() {
   for (let i = 1; i <= 7; i++) {
      let main = document.getElementById('main')
      const divColuna = document.createElement("div");
      divColuna.className = "column"
      divColuna.id = i
      for (let y = 1; y <= 6; y++) {
         const divLinha = document.createElement("div");
         divLinha.className = "cell";
         divColuna.appendChild(divLinha);
      }
      main.appendChild(divColuna)
   }
}
// table()

// // criar fichas pretas e vermelhas
// function createChip() {

//    // Retorna ficha vermelha se receber 'red' ou preta se receber 'black 
//    function createChip(nextPlayer) {
//       if (nextPlayer === 'red') {
//          console.log("red")
//          let newChip = document.createElement("div");
//          newChip.classList.add("red");
//          return newChip;
//       } else if (nextPlayer === 'black') {
//          let newChip = document.createElement("div");
//          newChip.classList.add("black");
//          return newChip;
//       }
//    }

let cols = [0]; // inicia cols com um elemento na posição 0 para cada coluna ter como index seu id
for (i = 1; i <= 7; i++) {
   cols.push(document.getElementById(`${i}`));
}
console.log(cols);

// Retorna a quantidade de chips numa determinada coluna
function columnChipCount(columnSelected) {
   let chipsCount = columnSelected.getElementsByAttribute('chip').length;
   return chipsCount;
}
// Verifica  a coluna em que o mouse esta em 'hover', se ainda ouver espaço ira alterar a variavel hover para true, se não houver, altera para false
let hover;
main.addEventListener('mouseover', function (e) {
   if (columnChipCount(e.target) < 6) {
      hover = true;
   } else {
      hover = false;
   }
})

// }
// // function jogada(){
// // cria novo chip
// // insere na próxima posição da coluna
// // insere dado no array placar
// // testar condição de vitória 

// // }
// // clicar na coluna cria uma ficha (push)
// // hover na coluna - verifica se tem espaço disponível {roda }
// // -- Nicolas

// // criar player 1 e player 2
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



// const jogada = document.getElementsByClassName('column')

// for (coluna of jogada) {
//    coluna.addEventListener('hover', function () {
//       //Inserir ficha na coluna
//       if (coluna.lenght <= 6) {
//          "Variável da célula".appendChild("Variável da ficha")

//          if (alternar == player1) {
//             //Registrar no array Placar 1 p/ Black
//          } else if (alternar == player2) {
//             //Registrar no array Placar 1 p/ Red
//          }
//          switchPlayer()
//       }

//    })
// }

// function switchPlayer() {
//    //Alteração de CSS p/ identificação visual.
//    // if (alternar == player1) {
//    //    "Variável da ficha".style.background - color = player2
//    // } else if (alternar == player2) {
//    //    "Variável da ficha".style.background - color = player1
//    // }

// }
// // rodada: selecionar coluna > insere uma ficha > altera jogador [1,0,1,1...]
// // -- Gustavo


// // condição de vitória: 4 em linha (h, v, d para cima, d para baixo)
// function endGame() {
//    // return "vitória: Player 1" / "vitória Player 2" / "Empate"
// }
// // h -> for(cada array){arrayX[y] === arrayX+1[y] arrX+2..}
// // fim do jogo: vitória player 1 - vitória player 2
// // empate (acabaram espaços e não atingiu condição de vitória)


// // fim de jogo: div popup com mensagem
// // RECEBE endGame
// function telaFinal(result) {
//    // define variáveis
//    let finalMsg = '';
//    let msgColor = '';
//    switch (result) {
//       // de acordo com o resultado recebido de endGame(), seta mensagem e cor do texto
//       case 'player1':
//          finalMsg = 'Player 1 é o vencedor!!';
//          msgColor = 'blue';
//          break;
//       case 'player2':
//          finalMsg = 'Player 2 é o vencedor!!';
//          msgColor = 'red';
//          break;
//       default:
//          finalMsg = 'Ninguém venceu - empate!!';
//          msgColor = 'green';
//          break;
//    }
//    // cria os elementos da página que irão apresentar o resultado do jogo
//    let target = document.getElementById('fimDeJogo');
//    let resultado = document.createElement('div');
//    resultado.style.color = msgColor;
//    let p = document.createElement('p');
//    let txt = document.createTextNode(finalMsg);
//    p.appendChild(txt);
//    resultado.appendChild(p);
//    target.appendChild(resultado);
//    // altera o display para tornar o resultado visível
//    target.style.display = 'flex';
// }

// botão reiniciar
// limpa tabuleiro = limpar os arrays e atualiza
// -- Atauã

const restart = document.getElementById('restart');
restart.onclick = function () {
   let columns = document.getElementsByClassName('column');
   columns.length = 0;
   for (column of columns) {
      column = null;
      return column;
   }
   // limpar arrays
   placar = [
      [],
      [],
      [],
      [],
      [],
      [],
      []
   ];
   // reinicia jogo do zero
   // table();
};