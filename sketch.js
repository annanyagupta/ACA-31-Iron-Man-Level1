
var bg, backgroundImg;
var ironman;

function preload() {
  bgImg = loadImage("images/bg.jpg");
 ironmanImg = loadImage("images/iron.png");

}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg);
  bg.scale =2;
  bg.velocityY=10;

 ironman =createSprite(200,450,20,50);
ironman.addImage(ironmanImg);
ironman.scale=0.5;
}

function draw() {
  if(bg.y>500)
  bg.y=200;
  if(keyDown("up")){
  ironman.velocityY = -10;
  }
  
  if(keyDown("left")){
  ironman.x-=ironman.x -5;
  }
  if(keyDown("right")){
  ironman.x+=ironman.x +5;
  }
  ironman.velocityY=ironman.velocityY +0.5;


    drawSprites();
   
}

