// criar tabuleiro 6 X 7
// cada coluna é um array vazio
// início automático
// -- Eduardo

//const coluna = document.getElementsByClassName('column'); // variavel pegando as 7 colunas
//const divCell = document.getElementsByClassName('cell');// variavel pegando todas as celulas

function table() {
   for (let i = 1; i <=7; i++) {
      let arrayColuna = Array();

      let main = document.getElementById('main')
      const divColuna = document.createElement("div");
      divColuna.className = "column"
      divColuna.id = i
      divColuna.target = main;



      for (let y = 0; y < 6; y++) {
         arrayColuna.push(y)

         const divLinha = document.createElement("div");
         divLinha.className = "celulas";
         coluna.appendChild(divLinha);

      }
      console.log(arrayColuna)   
   }
}

table()



