function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarros();
  movimentoAtor();
  movimentoCarros();
  repeticaoCarros();
  verificaColisao();
  incluirPlacar();
  marcaPonto();
  limiteBorda();
}



