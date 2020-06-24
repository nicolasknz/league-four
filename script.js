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

const testaVitoria = function () {

   function telaFinal(winner) {

      // cria os elementos da página que irão apresentar o resultado do jogo
      
      let resultado = document.createElement('div');
      resultado.id = 'fimDeJogo';
      resultado.style.backgroundColor = winner;

      let finalMsg = 'Player ' + winner + ' é o vencedor!!';
      let txt = document.createTextNode(finalMsg);

      let p = document.createElement('p');
      p.style.color = 'white';
      
      p.appendChild(txt);
      resultado.appendChild(p);
      main.appendChild(resultado);
   }

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
               telaFinal(player);
            }
         } else {
            redH = 0;
            blackH = 0;
         }
      }
   }

   //condição diagonal acima
   // for (let i = 0; i < 7; i++) {

   //    for (let j = 0; j < 6; j++) {

   //       let diagonal = []; // cria array
   //       let thisChip = columnArray[i].children[j]; // pega cada ficha
   //       if (thisChip !== undefined) { // se a ficha existe
   //          let chipClass = thisChip.className; // pega classe da ficha
   //          if (diagonal[diagonal.length] === 0 || diagonal[diagonal.length] === chipClass) { // se for o primeiro do array ou se o anterior for igual
   //             diagonal.push(chipClass); // insere no array
   //             console.log(diagonal);
   //             thisChip = columnArray[i + 1].children[j + 1];
   //             console.log(thisChip);
   //          }
   //       }
   //    //condição diagonal abaixo
   //    //condição empate
}

function play() {

   const black = 'black';
   const red = 'red';
   let player = black;
   const jogador = document.getElementById('player');
   jogador.textContent = player;

   let columnArray = document.getElementsByClassName('column');
   for (item of columnArray) {
      item.addEventListener('click', function () {
         if (this.children.length < 6) {
            let newChip = document.createElement('div');
            newChip.classList.add(player);
            this.appendChild(newChip);

            testaVitoria();

            // alterna jogadores
            if (player === black) {
               player = red
            } else if (player === red) {
               player = black
            }
         } else {
            return false;
         }
         jogador.textContent = player;
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