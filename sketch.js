var tela = 1;
var nivel = 0;
var l=87;
var h=55;
var xmenu =10;
var ymenu1=115;
var ymenu2=175;
var ymenu3=230;
var x = 0;
var y = 240;
var telaNivelPlay = 0
var iniciar=0
var tempo = 2
var aud = true;
var escolha = 0
let button;
let audInicio;
let audBanana;
var opcao;


//inserindo uma imagem  
let img;
let img1;
let img2;
let banana;
let maça;
let laranja;
let melancia;
let fundo;
let macaco;

function preload() {
      img = loadImage('fone.png');
      img1=loadImage('eu2.jpg');
      img2= loadImage('prof.jpg');
      banana = loadImage('banana.png'); 
      maça = loadImage('maça.png');
      laranja = loadImage('laranja.png');
      melancia = loadImage('melancia.png');
      fundo =  loadImage('papel.jpg');
      macaco = loadImage('macaco banana.png')
}
function setup(){
    createCanvas(400,400);//definido o tamanho da nossa tela
    frameRate(30);
}
function voltar() {
    tela = 1;
    tempo = 2;
    nivel = 0;
    telaNivelPlay = 0;
    iniciar = 0;
    escolha = 0;
    opcao = 0;
}

// Telas principais do jogo 
  function tela1(){
    tempo=2
    image(fundo,0,0)
    textAlign(LEFT);// definindo a posição do texto a esquerda
    text("OUVINDO E ESCREVENDO",60,38);//inseirindo um texto
    // audInicio.autoplay(true);//definindo onde o audio iniciara 
    
//definindo onde a imagem vai ficar 
    image(img,150,100,250)
    
//opções do menu 
//play
    textAlign(RIGHT);// definindo a posição do texto a direita
    textSize(20);
if(mouseX > xmenu && mouseX < xmenu +l && mouseY> ymenu1&& mouseY< ymenu1+ h){
      stroke(200);//desenha linhas de borda
      fill(92,30,72);   //cor do fundo do botão 
      rect(10,100, 87,45,15)
    if(mouseIsPressed){
        tela = 2
    }
  }
  fill(240);// cor da letra
  noStroke();//remover o contorno que é usado para desenhar linhas e bordas em torno de formas.
  text("Play",60,130);// inserindo o texto de inicio de jogo
    
//regras
 if(mouseX > xmenu && mouseX < xmenu +l && mouseY > ymenu2 && mouseY < ymenu2+h){
    stroke(200);
     fill(92,30,72); // cor de fundo do botão
    rect(10,160, 87, 45,15)
   if(mouseIsPressed){
    tela=3
    }
  }
  fill(240);
  noStroke();
  text("Regras",85,185);// o botão de informação 
    
//creditos    
if(mouseX > xmenu && mouseX < xmenu +l && mouseY > ymenu3 && mouseY < ymenu3+h){
    stroke(200);
    fill(92,30,72); // cor de fundo do botão
    rect(10,215,87,45,15)
   if(mouseIsPressed){
      tela=4
    }
  }
  fill(240);//cor da letra 
  noStroke();
  text("Creditos",90,240);// o botão de informação 
  //fim da tela de menu  
} // menu principal 
  function tela2(){
    if(frameCount%30 == 0){
      tempo-=1
    }
    image(fundo,0,0)
    //inserindo a opção do usuario escolher o nivel 
    textAlign(LEFT);
    text("Niveis do jogo",80,30);
    
    textAlign(RIGHT);
    textSize(20);
if(mouseX > xmenu&& mouseX < xmenu+l && mouseY> ymenu1&& mouseY< ymenu1+ h){ 
      stroke(200);
      fill(92,30,72);  
      rect(10,100, 87,45,15)
    if(mouseIsPressed && tempo<0){
        nivel= 1
    }
  }
  fill(240);
  noStroke();
  text("Nivel 1",80,130);
    
// nivel 2 
 if(mouseX > xmenu && mouseX < xmenu+l && mouseY > ymenu2 && mouseY < ymenu2+h){
    stroke(200);
     fill(92,30,72); 
    rect(10,160, 87, 45,15)
   if(mouseIsPressed && tempo<0){
       nivel=2
    }
  }
  fill(240);
  noStroke();
  text("Nivel 2",80,185);
    
//nivel 3    
if(mouseX > xmenu&& mouseX < xmenu+l && mouseY > ymenu3 && mouseY < ymenu3+h){
    stroke(200);
    fill(92,30,72); // cor de fundo do botão
    rect(10,215,87,45,15)
   if(mouseIsPressed && tempo<0){
      nivel=3
    }
  }
  fill(240);
  noStroke();
  text("Nivel 3",80,240);  
 
       
//inserindo um botão para voltar ao menu principal 
    button = createButton('voltar');
    button.position(340,370);
    button.mousePressed(voltar); 
    
//definindo onde a imagem vai ficar 
    image(img,150,100,250)
} // tela de niveis 
  function tela3(){
    // tela de informações do jogo
    background(10);
    fill(240);
    textSize(14);
    noStroke();
    textAlign(LEFT);
    text("  Este jogo ajuda crianças no inicio da formação a aprender a descrever as palavras de acordo com o som.... suas regras são simples, o usuario tera acesso ao som da pronuncia das palavras exemplo o audio da palavra 'banana' e em seguida ele tera dispensações das silabas permitindo que ele as coloquem da forma correta para obter a palavra banana. Espero que goste!",20,20,260,260);
    
  } // tela de regras
  function tela4(){
    textAlign(CENTER);
    background(153,51,153)
    fill(240);
    textSize(16);
    text("Creditos",20,20,260,260);
    text("Programadora: Ana Beatriz",50,60,260,260);
    text(" Professora: IDALMIS MILIAN  ",50,200,260,260);
    text(" LOP - turma:06 ",20,100,260,260);
    image(img1,8,50,50,80);
    image(img2,8,170,50,80);
    
//inserindo um botão para voltar ao menu principal 
    button = createButton('voltar');
    button.position(230, 270);
    button.mousePressed(voltar); 
   } // tela de creditos 

//criando as telas de explicação de cada nivel
  function exNivel1(){
    background(153,51,153)
//tela de informações do jogo
    background(10);
    fill(240)
    noStroke();
    textAlign(LEFT);
    text("Nivel 1",90,30)
    text("Este nivel é recomendado para crianças no inicio da escolaridade, nele o jogador deve ouvir o audio e escolher qual a figura que representa o que foi ouvido! Boa Sorte",70,70,260,260);
     
//criando o botão de inicio do jogo:
textAlign(RIGHT);// definindo a posição do texto a direita
textSize(20);
if(mouseX > 150&& mouseX < 150 +87 && mouseY> 172&& mouseY< 330+45){
      stroke(200);//desenha linhas de borda
      fill(92,30,72);//cor do fundo do botão 
      rect(140,330,87,45,15)
    if(mouseIsPressed){
       iniciar= 1
    }
  }
  fill(240);// cor da letra
  noStroke();//remover o contorno que é usado para desenhar linhas e bordas em torno de formas.
  text("Play",200,360);// inserindo o texto de inicio de jogo
    

    
}
  function exNivel2(){
    background(153,51,153)
//tela de informações do jogo
    background(10);
    fill(240);
    noStroke();
    textAlign(LEFT);
    text("Nivel 2",90,30)
    text("Este nivel é recomendado para crianças no inicio da escolaridade, nele o jogador deve juntar todos os blocos para formar a palavra que foi ouvida.",50,70,260,260);
     
//criando o botão de inicio do jogo:
textAlign(RIGHT);// definindo a posição do texto a direita
textSize(20);
if(mouseX > 90&& mouseX < 90 +l && mouseY> 300&& mouseY< 300+ h){
      stroke(200);//desenha linhas de borda
      fill(92,30,72);//cor do fundo do botão 
      rect(90,320,87,45,15)
    if(mouseIsPressed){
      iniciar = 2
    }
  }
  fill(240);// cor da letra
  noStroke();//remover o contorno que é usado para desenhar linhas e bordas em torno de formas.
  text("Play",150,350);// inserindo o texto de inicio de jogo
    
}
  function exNivel3(){
    background(153,51,153)
    textAlign(LEFT);
    text("Nivel 3",20,30)
    
//tela de informações do jogo
    background(10);
    fill(240);
    textSize(14);
    noStroke();
    textAlign(LEFT);
    text("Este nivel é recomendado para crianças no inicio da escolaridade, nele o jogador deve ouvir a palavra que ja foi associada a imagens nos niveis anteriores e escrever manualmente atraves do teclado a palavra",20,70,260,260);
     
//criando o botão de inicio do jogo:
textAlign(RIGHT);// definindo a posição do texto a direita
textSize(20);
if(mouseX > 100&& mouseX < 100 +l && mouseY> 172&& mouseY< 172+ h){
      stroke(200);//desenha linhas de borda
      fill(92,30,72);//cor do fundo do botão 
      rect(100,200,87,45,15)
    if(mouseIsPressed){
      telaNivelPlay1() 
    }
  }
  fill(240);// cor da letra
  noStroke();//remover o contorno que é usado para desenhar linhas e bordas em torno de formas.
  text("Play",150,230);// inserindo o texto de inicio de jogo
    
//inserindo um botão para voltar ao menu principal 
    button = createButton('voltar');
    button.position(230, 270);
    button.mousePressed(voltar); 
  }

//Criando a tela de parabéns
function parabens(){
  textAlign(CENTER);
  image(fundo,0,0)
  textAlign(LEFT);
  text("PARABÉNS",100,30)
  text(" A resposta está certa! ",60,50,260,260);
  
  text(" você sabia: A banana é uma fruta de elevado valor nutricional. É boa fonte energética, possuindo alto teor de carboidratos – amido e açúcares. Contém ainda teores consideráveis de vitaminas A, B1 (tiamina), B2 (riboflavina) e C e de sais minerais como potássio, fósforo, cálcio, sódio e magnésio, além de outros em menor quantidade.",60,100,260,260); 
}

//Criando a tela de tente novamente da tela 1 
function tenteNovamente(){ 
  image(fundo,0,0)
  textAlign(LEFT);
  text("Não foi dessa vez tente novamente",20,30)
  text("Sugestão você sabe qual a fruta preferida do macaco?????",60,70,260,260);
  
    image(macaco,120,180,170,100)
//criando o botão para inicio do jogo :
textAlign(RIGHT);
textSize(20);
if(mouseX > 35&& mouseX < 35 +230 && mouseY> 330&& mouseY< 330+45){
      stroke(200);//desenha linhas de borda
      fill(92,30,72);//cor do fundo do botão 
      rect(35,330,200,45,15)
    if(mouseIsPressed){
      escolha = 0
    }
  }
  fill(240);// cor da letra
  noStroke();//remover o contorno que é usado para desenhar linhas e bordas em torno de formas.
  text("Voltar pro Nivel 1",200,360);// inserindo o texto de inicio de jogo
  }

//Criando a tela de tente novamente da tela 2
function  tenteNovamente2(){
   image(fundo,0,0)
  textAlign(LEFT);
  text("Não foi dessa vez tente novamente",20,30)
  text("Sugestão você sabe qual a fruta preferida do macaco?????",60,70,260,260);
  
    image(macaco,120,180,170,100)
//criando o botão para inicio do jogo :
textAlign(RIGHT);
textSize(20);
if(mouseX > 35&& mouseX < 35 +230 && mouseY> 330&& mouseY< 330+45){
      stroke(200);//desenha linhas de borda
      fill(92,30,72);//cor do fundo do botão 
      rect(35,330,200,45,15)
    if(mouseIsPressed){
       opcao = 0
    }
  }
  fill(240);// cor da letra
  noStroke();//remover o contorno que é usado para desenhar linhas e bordas em torno de formas.
  text("Voltar pro Nivel 2",200,360);// inserindo o texto de inicio de jogo
  }


//--------------------------------------------------------------

function draw() {
textStyle(NORMAL);
  //audios do jogo 
//audInicio = createAudio('song1.mp3');
audBanana = createAudio('banana.mp3');

//Iniciando as telas 
  if(tela==1){
    tela1() 
}
  else if (tela ==2){
    tela2();
  }
  else if (tela == 3){
    tela3();
  }
  else if (tela == 4){
    tela4();
  }
  
//iniciando as telas de explicação de cada nivel 
  if(tela ==2 && nivel==1){
      exNivel1()
  }else if (tela ==2 && nivel==2){
      exNivel2()
  }else if(tela ==2 && nivel==3){
      exNivel3()
  }
  
  
//criando as telas de acordo com o nivel 
function telaNivelPlay1(){
  tela = 2
  image(fundo,0,0)
  textAlign(LEFT);
  text("Nivel 1",150,30)
  text("Nessa fase voçê deve escolher  a imagem que representa o que voçê ouviu",60,70,260,260);

  if(mouseX > 35 && mouseX < 35+55&& mouseY> 180&& mouseY< 240){ 
    if(mouseIsPressed ){
        escolha = 1 
    }
    rect(35,200,55,60,15)
}
  
  if(mouseX > 120 && mouseX < 120+55 && mouseY> 180&& mouseY< 240){ 
    if(mouseIsPressed ){
        escolha = 2 
    }
    rect(120,200,55,60,15)
}
  
  if(mouseX > 190 && mouseX < 190+55 && mouseY> 180&& mouseY< 240){ 
    if(mouseIsPressed ){
        escolha = 3 
    }
    rect(190,200,55,60,15)
}
  
  if(mouseX > 260 && mouseX < 260+55 && mouseY> 180&& mouseY< 240){ 
    if(mouseIsPressed ){
        escolha = 4 
    }
    rect( 260,200,55,60,15)
}
  
  image(banana,35,180,50,100)
  image(maça,120,180,35,100)
  image(laranja,190,180,35,100)
  image(melancia,260,180,35,100)
  
  textAlign(RIGHT);
  textSize(20);
  if(mouseX >30 && mouseX < 250 && mouseY> 320 && mouseY< 350+ 10){
  stroke(200);//desenha linhas de borda
  fill(92,30,72);   //cor do fundo do botão 
  rect(135,320, 100,45,15)
    if(mouseIsPressed ){
   audBanana.autoplay(true)
    }
  }
  fill(240);
  noStroke()
  text("Ouvir",200,350);
  
    if(escolha > 1){
    tenteNovamente()
  }else if(escolha ==1 ){
     parabens()
    }

}
function telaNivelPlay2() {
  tela = 2
  image(fundo,0,0)
  textAlign(LEFT);
  text("Nivel 2",150,30)
  text("Selecione a opção que descreve a palavra que ouviu ",60,70,260,260);

  //criando os botoes 
  stroke(200);
  fill(92,30,72);
  rect(35,170,90,50,15)
  
   fill(240);
  noStroke();
  text("BANANA",40,200);
  
  stroke(200);
  fill(92,30,72);
  rect(160, 170,90,50,15)
  
   fill(240);
  noStroke();
  text("BATANA",170, 200);
  
  
  stroke(200);
  fill(92,30,72);
  rect(35,250,90,50,15)
  
  fill(240);
  noStroke();
  text("PANANA",40,280);
  
  stroke(200);
  fill(92,30,72);
  rect(160, 250,105,50,15)
  
   fill(240);
  noStroke();
  text("BAUNANA ",165, 280);
  
//criando as cordenadas sensiveis para o botão 
  if(mouseX > 35 && mouseX < 35 +l && mouseY> 170 && mouseY< 170+ h){
    if(mouseIsPressed){
         opcao = 1
    }
  }
  
   if(mouseX > 160 && mouseX < 160 +l && mouseY> 170 && mouseY< 170+ h){
    if(mouseIsPressed){
         opcao = 2
    }
  }
  
   if(mouseX > 35 && mouseX < 35 +l && mouseY> 250 && mouseY< 250+ h){
    if(mouseIsPressed){
        opcao = 3
    }
  }
  
   if(mouseX > 160 && mouseX < 160 +l && mouseY> 250 && mouseY< 250+ h){
    if(mouseIsPressed){
         opcao = 4
    }
  }
  
//inserindo o botão de ouvir novamente 
textAlign(RIGHT);
textSize(20);
  if(mouseX >130 && mouseX < 250 && mouseY> 320 && mouseY< 350+ 10){
  stroke(200);//desenha linhas de borda
  fill(92,30,72);   //cor do fundo do botão 
  rect(135,320, 100,45,15)
    if(mouseIsPressed ){
   audBanana.autoplay(true)
    }
  }
  fill(240);
  noStroke()
  text("Ouvir",200,350);
  
}
function telaNivelPlay3(){ 
   //ainda desenvolvendo 
}
  
//chamando a tela de inicio do jogo 
  if(iniciar==1){
    telaNivelPlay1()
  } else if (iniciar == 2 ){
    telaNivelPlay2()
  }else if (iniciar == 3 ){
    telaNivelPlay3()
  }
  
//função para ouvir de novo 
function ouvir (){
   audBanana.autoplay(true)
  }

//verificando a escolha  no nivel 2 
 if(opcao > 1 ){
   tenteNovamente2();
 }else if (opcao == 1 ){
     parabens();
 }

}


// link do you tube prova 01: https://youtu.be/A1ZFyBr62x8 
/*link do you tube prova 02 (video de explicação: https://youtu.be/ifTIKLDdyzM)
link do you tube prova 02 (video1: https://youtu.be/2jXWPJ6e-u8)
link do you tube prova 02 (video2:https://youtu.be/iyVIkTyQDgU)
*/
// link do p5: https://editor.p5js.org/beatrizsilvarn2016/sketches/7OMSFhCHO