//Variaveis do Ator
let xAtor = 50;
let yAtor = 365;
let colidiu = false;
let meusPontos = 0


function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentoAtor() {
  if (keyIsDown(87)){
    yAtor -= 4;
  }
  if (keyIsDown(83)){
    if (limiteBorda()){  
    yAtor += 4;
    }
  }
}

function verificaColisao() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i += 1){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 13 )
    if (colidiu){
      perdePonto();
      voltaInicio();
      colisao.play();
    }
  }
}

function voltaInicio() {
  yAtor = 365
}


function incluirPlacar() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 0, 255))
  text(meusPontos, width / 2, 27)
}
  
function marcaPonto() {
  if (yAtor < 15){
    meusPontos += 1;
    pontos.play();
    voltaInicio();
  }
}

function limiteBorda() {
  return yAtor < 365 
}

function perdePonto() {
  if (voltaPraZero()){
    meusPontos -= 1;
  }
}

function voltaPraZero() {
    return meusPontos > 0;
}