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

function telaFinal(player) {

   // cria os elementos da página que irão apresentar o resultado do jogo

   let resultado = document.createElement('div');
   resultado.id = 'fimDeJogo';
   resultado.style.backgroundColor = player;

   let finalMsg = player.toUpperCase() + ' é o vencedor!!';
   if (player === 'blue') {
      finalMsg = 'EMPATE! Ninguém venceu!!'
   }
   let txt = document.createTextNode(finalMsg);

   let p = document.createElement('p');

   p.appendChild(txt);
   resultado.appendChild(p);
   main.appendChild(resultado);
}

const testaVitoria = function (player) {

   let columnArray = document.getElementsByClassName('column');
   let winner = 0;
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
               winner = 1;
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
               winner = 1;
               telaFinal(player);
            }
         } else {
            redH = 0;
            blackH = 0;
         }
      }
   }

   //condição diagonal acima
   for (let i = 0; i < 7; i++) { // em cada coluna

      for (let j = 0; j < 6; j++) { // em cada item de cada coluna

         let diagonal = []; // cria array vazio
         for (let turns = 0; turns < 5; turns++) { // repete 4 vezes
            if (columnArray[i + turns] !== undefined && columnArray[i + turns].children[j + turns] !== undefined) {
               let thisChip = columnArray[i + turns].children[j + turns]; // começa no zero
               if (thisChip !== undefined) { // se a ficha existe
                  let chipClass = thisChip.className; // pega classe da ficha
                  diagonal.push(chipClass); // insere no array
               }
            }
         }
         if (diagonal.length >= 4) {
            let testDiagonal = diagonal.every((val) => val === player);
            // telaFinal(player);
            if (!!testDiagonal) {
               winner = 1;
               telaFinal(player);
            };
         }
      }
   }
   //    //condição diagonal abaixo
   for (let i = 0; i < 7; i++) { // em cada coluna
      for (let j = 0; j < 6; j++) { // em cada item de cada coluna

         let diagonal = []; // cria array vazio
         for (let turns = 0; turns < 4; turns++) { // repete 4 vezes
            if (columnArray[i + turns] !== undefined && columnArray[i + turns].children[j - turns] !== undefined) {
               let thisChip = columnArray[i + turns].children[j - turns]; // começa no zero
               if (thisChip !== undefined) { // se a ficha existe
                  let chipClass = thisChip.className; // pega classe da ficha
                  diagonal.push(chipClass); // insere no array
               }
            }
         }
         if (diagonal.length >= 4) {
            let testDiagonal = diagonal.every((val) => val === player);
            // telaFinal(player);
            if (!!testDiagonal) {
               winner = 1;
               telaFinal(player);
            }
         }
      }
   }

   //condição empate
   let countChips = document.getElementsByClassName('black').length + document.getElementsByClassName('red').length;
   if (winner === 0 && countChips === 42) {
      telaFinal('blue');
   }
}

function play() {

   const black = 'black';
   const red = 'red';
   let player = black;
   const spanPlayer = document.getElementById('spanPlayer');
   spanPlayer.textContent = player;

   let columnArray = document.getElementsByClassName('column');
   for (item of columnArray) {
      item.addEventListener('click', function () {
         if (this.children.length < 6) {
            let newChip = document.createElement('div');
            newChip.classList.add(player);
            this.appendChild(newChip);

            testaVitoria(player);

            // alterna jogadores
            if (player === black) {
               player = red
            } else if (player === red) {
               player = black
            }
         } else {
            return false;
         }
         spanPlayer.textContent = player;
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