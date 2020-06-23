const main = document.getElementById('main');

function table() {
   // criar tabuleiro coms 7 colunas
   for (let i = 1; i <= 7; i++) {
      const divColuna = document.createElement('div');
      divColuna.className = 'column';
      divColuna.id = i;
      main.appendChild(divColuna);
   }
}
table();

// const black = 'black';
// const red = 'red';
// let player = black;

// function switchPlayer() {
//    if (player === 'black') {
//       player = 'red'
//    } else if (player === 'red') {
//       player = 'black'
//    }
// }

// // Retorna ficha vermelha se receber 'red' ou preta se receber 'black'
// function createChip(nextPlayer) {
//    let newChip = document.createElement('div');
//    if (nextPlayer === 'red') {
//       newChip.classList.add('red');
//    } else if (nextPlayer === 'black') {
//       newChip.classList.add('black');
//    }
//    return newChip;
// }

// // Retorna a quantidade de chips numa determinada coluna
// function columnChipCount(columnSelected) {
//    let chipsCount = columnSelected.getElementsByTagName('*').length;
//    return chipsCount;
// }

// // Verifica  a coluna em que o mouse está ao clicar, se ainda houver espaço ira alterar a variavel hover para true, se não houver, altera para false
// let hover;

// let columns = document.getElementsByClassName('columns');
// console.log(columns);
// // columns.forEach(element => {
// //    element.addEventListener('click', function () {
// //       if (columnChipCount(element) < 6) {
// //          element.appendChild(createChip(player))
// //          switchPlayer()
// //       } else {
// //          return false;
// //       }
// //    });
// // });

// // condição de vitória: 4 em linha (h, v, d para cima, d para baixo)
// function endGame() {
//    // return 'vitória: Player 1' / 'vitória Player 2' / 'Empate'
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

// // botão reiniciar
// // limpa tabuleiro = limpar os arrays e atualiza
// // -- Atauã

// const restart = document.getElementById('restart');
// restart.onclick = function () {
//    main.childElementCount = 0;

//    table();
// }