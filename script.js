// criar tabuleiro 6 X 7
function table() {

}
// cada coluna é um array vazio
// início automático
// -- Eduardo

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

// Retorna a quantidade de chips numa determinada coluna
function columnChipCount (columnSelected) {
   let chipsCount = columnSelected.getElementsByTagName('*').length - 6;
   return chipsCount;
}
// Verifica  a coluna em que o mouse esta em 'hover', se ainda ouver espaço ira alterar a variavel hover para true, se não houver, altera para false
let hover;
main.addEventListener('mouseover', function(e){
  if (e.target.id === '1') {
     if (columnChipCount(coluna1) < 6){
        hover = true;
     } else {
        hover = false;
     }
  }
  if (e.target.id === '2') {
   if (columnChipCount(coluna2) < 6){
      hover = true;
   } else {
      hover = false;
   }
}
if (e.target.id === '3') {
   if (columnChipCount(coluna3) < 6){
      hover = true;
   } else {
      hover = false;   }
}
if (e.target.id === '4') {
   if (columnChipCount(coluna4) < 6){
      hover = true;
   } else {
      hover = false;   }
}
if (e.target.id === '5') {
   if (columnChipCount(coluna5) < 6 ){
      hover = true;
   } else {
      hover = false;   }
}
if (e.target.id === '6') {
   if (columnChipCount(coluna6) < 6 ){
      hover = true;
   } else  {
      hover = false;   }
}
if (e.target.id === '7') {
   if (columnChipCount(coluna7) < 6 ){
      hover = true;
   } else {
      hover = false;   }
}
})

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