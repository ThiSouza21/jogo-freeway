//Variaveis dos Carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeXCarros = [2.2, 2.8, 3.5, 5, 4.1, 3.2]
let compCarro = 50;
let altCarro = 40;


function mostraCarros() {
   for (let i = 0; i < imagemCarros.length; i += 1){
     image(imagemCarros[i] , xCarros[i], yCarros[i] , compCarro, altCarro)
   }
}

function movimentoCarros() {
  for (let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidadeXCarros[i];
  }
}

function repeticaoCarros() {
  for (let i = 0; i < imagemCarros.length; i += 1){
    if (carroPassouTodo(xCarros[i])){
     xCarros[i] = 600; 
    }
  }
}

function carroPassouTodo(xCarro) {
    return xCarro < - 50;
}








