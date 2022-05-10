var árvore,árvoreImg;
var floresta;
var fogo,fogoImg;
var backgroundImg

function preload(){
 backgroundImg = loadImage("floresta.webp"); 
 
 fogoImg = loadImage("fogo.png"),

 árvoreImg = loadImage("árvore.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight);

 árvore = createSprite(1300,300);
 árvore.addImage("árvore", árvoreImg);

 fogo = createSprite(200,300);
 fogo.addImage("fogo", fogoImg);
}

function draw() {
background(backgroundImg);
 drawSprites();
}