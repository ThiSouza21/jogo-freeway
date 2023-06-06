//Variaveis de Imagens
let imagemAtor;
let imagemCarro;
let imagemEstrada;
let trilha;
let pontos;
let colisao;

function preload() {
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  trilha = loadSound("trilha.mp3")
  pontos = loadSound("pontos.wav")
  colisao = loadSound("colidiu.mp3")
}











