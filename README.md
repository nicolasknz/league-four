



// criar fichas pretas e vermelhas
function createChip() {

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
function final(result) {
   // define variáveis
   let finalMsg = '';
   let msgColor = '';
   switch (result) {
      // de acordo com o resultado recebido de endGame(), seta mensagem e cor do texto
      case 'player1':
         finalMsg = 'Player 1 é o vencedor!!';
         msgColor = 'blue';
         break;
      case 'player2':
         finalMsg = 'Player 2 é o vencedor!!';
         msgColor = 'red';
         break;
      default:
         finalMsg = 'Ninguém venceu - empate!!';
         msgColor = 'green';
         break;
   }
   // cria os elementos da página que irão apresentar o resultado do jogo
   let target = document.getElementById('fimDeJogo');
   let resultado = document.createElement('div');
   resultado.style.color = msgColor;
   let p = document.createElement('p');
   let txt = document.createTextNode(finalMsg);
   p.appendChild(txt);
   resultado.appendChild(p);
   target.appendChild(resultado);
   // altera o display para tornar o resultado visível
   target.style.display = 'inline-block';
}

// botão reiniciar
// limpa tabuleiro = limpar os arrays e atualiza
// -- Atauã

const restart = document.getElementById('restart');
restart.onclick = function () {

   let cells = document.getElementsByClassName('cell');
   for (cell of cells) {
      cell.classList.remove('chip', 'blue', 'red');
   }
   // limpar arrays
   table();
};
