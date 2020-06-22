// criar tabuleiro 6 X 7
// cada coluna é um array vazio
// início automático
// -- Eduardo

const coluna = document.getElementsByClassName('column'); // variavel pegando as 7 colunas
//const divCell = document.getElementsByClassName('cell'); // variavel pegando todas as celulas

function table() {
      for (let i = 0; i <coluna.length; i++) {
      let arrayColuna = Array();

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

}
// clicar na coluna cria uma ficha (push)
// hover na coluna - verifica se tem espaço disponível {roda }
// -- Nicolas

// criar player 1 e player 2
function switchPlayer() {

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


// fim de jogo: div popup com mensagem
// RECEBE endGame(){
//seta mensagem
// altera display
// }
// botão reiniciar
// limpa tabuleiro = limpar os arrays e atualiza
// -- Atauã

const restart = document.getElementById('restart');
restart.onclick = function () {
   alert('reinício');
}


// teste merge edu