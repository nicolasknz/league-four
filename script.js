// criar tabuleiro 6 X 7
function table() {

}
// cada coluna é um array vazio
// início automático
// -- Eduardo

// criar fichas pretas e vermelhas
function createChip() {

}
// clicar na coluna cria uma ficha (push)
// hover na coluna - verifica se tem espaço disponível {roda }
// -- Nicolas

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