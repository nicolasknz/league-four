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

function play() {

   const black = 'black';
   const red = 'red';
   let player = black;
   const jogador = document.getElementById('player');
   jogador.textContent = player;

   function switchPlayer() {
      if (player === 'black') {
         player = 'red'
         jogador.textContent = player;
      } else if (player === 'red') {
         player = 'black'
         jogador.textContent = player;
      }
   }

   // Retorna ficha vermelha se receber 'red' ou preta se receber 'black'
   function createChip(nextPlayer) {
      let newChip = document.createElement('div');
      if (nextPlayer === 'red') {
         newChip.classList.add('red');
      } else if (nextPlayer === 'black') {
         newChip.classList.add('black');
      }
      return newChip;
   }

   // Retorna a quantidade de chips numa determinada coluna
   function columnChipCount(columnArrayelected) {
      let chipsCount = columnArrayelected.getElementsByTagName('*').length;
      return chipsCount;
   }
   // fim de jogo: div popup com mensagem
   // RECEBE endGame
   function telaFinal(result) {
      // define variáveis
      let finalMsg = '';
      let msgColor = '';
      switch (result) {
         // de acordo com o resultado recebido de endGame(), seta mensagem e cor do texto
         case 'black':
            finalMsg = 'Player BLACK é o vencedor!!';
            msgColor = 'black';
            break;
         case 'red':
            finalMsg = 'Player RED é o vencedor!!';
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
      target.style.display = 'flex';
   }

   const testaVitoria = function () {
      let resultado = 'empate';
      let columnArray = document.getElementsByClassName('column');

      //condição vertical
      for (let i = 0; i < 7; i++) {
         let blackV = 0;
         let redV = 0;
         for (let j = 0; j < 6; j++) {
            if (columnArray[i].children[j] !== undefined) {
               if (columnArray[i].children[j].classList.contains('black')) {
                  blackV++;
                  redV = 0;
               } else if (columnArray[i].children[j].classList.contains('red')) {
                  redV++;
                  blackV = 0;
               }
               if (blackV >= 4 || redV >= 4) {
                  telaFinal(player);
               }
            }
         }
      }

      //condição horizontal
      for (let j = 0; j < 6; j++) {
         let blackH = 0;
         let redH = 0;
         for (let i = 0; i < 7; i++) {
            if (columnArray[i].children[j] !== undefined) {
               if (columnArray[i].children[j].classList.contains('black')) {
                  blackH++;
                  redH = 0;
               } else if (columnArray[i].children[j].classList.contains('red')) {
                  redH++;
                  blackH = 0;
               }
               if (blackH >= 4 || redH >= 4) {
                  telafinal(player);
               }
            } else {
               redH = 0;
               blackH = 0;
            }
         }
      }

      //condição diagonal acima

      for (let j = 0; j < 6; j++) {
         let blackUp = 0;
         let redUp = 0;

         let k = j;
         for (let i = 0; i < 7; i++, k++) {
            if (columnArray[i].children[j] !== undefined) {
               if (columnArray[i + 1].children[j + 1].classList.contains('black')) {
                  blackUp++;
                  redUp = 0;
               } else if (columnArray[i + 1].children[j + 1].classList.contains('red')) {
                  redUp++;
                  blackUp = 0;
               }
               if (blackUp >= 4 || redUp >= 4) {
                  telafinal(player);
               }
            } else {
               redUp = 0;
               blackUp = 0;
            }
         }
      }


      //    //condição diagonal abaixo
      //    //condição empate
   }

   // Verifica  a coluna em que o mouse está ao clicar, se ainda houver espaço ira alterar a variavel hover para true, se não houver, altera para false
   let hover;
   let columnArray = document.getElementsByClassName('column');
   for (item of columnArray) {
      item.addEventListener('click', function () {
         if (columnChipCount(this) < 6) {
            this.appendChild(createChip(player));
            testaVitoria();
            switchPlayer();
         } else {
            return false;
         }
      });
   }

}
play();

const restart = document.getElementById('restart');
restart.onclick = function () {
   main.innerHTML = '';
   table();
   play();
}