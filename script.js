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



   // Diagonais esquerda pra direita
    // Diagonal principal
    let blackD = 0;
    let redD = 0;
    for(  i = 0 ; i < 6 ; i++) {
         if(columnArray[i].children[i] !== undefined){
            if(columnArray[i].children[i].classList.contains('black')){
            blackD++;
            redD = 0
         } else if(columnArray[i].children[i].classList.contains('red')) {
            redD++;
            blackD = 0;
         }
         } else if(columnArray[i].children[i] === undefined){
            blackD = 0;
            redD = 0
         } if (blackD >= 4 || redD >= 4) {
            alert(player + " venceu");
         }
   }

   // Primeira diagonal a esquerda da diagonal principal
let j = 1 
let blackD1 = 0;
let redD1 = 0;
    for ( let i = 0;  i < 5 ; i ++){
          if(columnArray[i].children[j] !== undefined){
                if(columnArray[i].children[j].classList.contains('black')){
                blackD1++;
                redD1 = 0;
      } 
      else if(columnArray[i].children[j].classList.contains('red')){
         redD1++;
         blackD1 = 0 ;
      }
      } else if (columnArray[i].children[j] === undefined) {
         redD1 = 0;
         blackD1 = 0 ;
      }
      if (blackD1 >= 4 || redD1 >= 4) {
         alert(player + " venceu");
      }
   // console.log(i + " " + j + " " + blackD1)
   j++
    }
   // Segunda diagonal a esquerda da diagonal principal
     j = 2 
     let blackD2 = 0;
     let redD2 = 0;
         for ( let i = 0;  i < 5 ; i ++){
            if(columnArray[i].children[j] !== undefined){
                  if(columnArray[i].children[j].classList.contains('black')){
                  blackD2++;
           } 
           else if(columnArray[i].children[j].classList.contains('red')){
                  redD2++;
                  blackD2 = 0;
           }
           } else if (columnArray[i].children[j] === undefined) {
            redD2 = 0;
            blackD2 = 0 ;
        }
        if (blackD2 >= 4 || redD2 >= 4) {
         alert(player + " venceu");
       } 
        j++
         }
      // Primeira diagonal a DIREITA da diagonal principal
      let blackDD1 = 0;
      let redDD1 = 0
      j = 0
       for (i = 1 ; i < 7 ; i++){
            if(columnArray[i].children[j] !== undefined){
               if(columnArray[i].children[j].classList.contains('black')){
                  blackDD1++;
                  redDD1 = 0;
         } else if(columnArray[i].children[j].classList.contains('red')){
            redDD1++;
            blackDD1 = 0;
         }
         } else if (columnArray[i].children[j] === undefined) {
            redDD1 = 0;
            blackDD1 = 0 ;
        }
         if (blackDD1 >= 4 || redDD1 >= 4) {
            alert(player + " venceu");
          } 
         j++
      } 
    // Segunda diagonal a DIREITA da diagonal principal
   j = 0;
   let redDD2 = 0;
   let blackDD2 = 0 ;
   for (i = 2 ; i < 6 ; i++){
      if(columnArray[i].children[j] !== undefined){
         if(columnArray[i].children[j].classList.contains('black')){
            blackDD2++;
            redDD2 = 0;
   } else if(columnArray[i].children[j].classList.contains('red')){
      redDD2++;
      blackDD2 = 0;
   }
   } else if (columnArray[i].children[j] === undefined) {
      redDD2 = 0;
      blackDD2 = 0 ;
  }
   if (blackDD2 >= 4 || redDD2 >= 4) {
      alert(player + " venceu");
    } 
   j++
   }

// Terceira diagonal a DIREITA da diagonal principal
   j = 0;
   let redDD3 = 0;
   let blackDD3 = 0 ;
   for (i = 3 ; i < 7 ; i++){
      if(columnArray[i].children[j] !== undefined){
         if(columnArray[i].children[j].classList.contains('black')){
            blackDD3++;
            redDD3 = 0;
   } else if(columnArray[i].children[j].classList.contains('red')){
      redDD3++;
      blackDD3 = 0;
   }
   } else if (columnArray[i].children[j] === undefined) {
      redDD3 = 0;
      blackDD3 = 0 ;
  }
   if (blackDD3 >= 4 || redDD3 >= 4) {
      alert(player + " venceu");
    } 
    console.log(i + " " + j + " " + blackDD3)
   j++
   }
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