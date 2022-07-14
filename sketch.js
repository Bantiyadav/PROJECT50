var Canvas
var   trackImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score 

var hero_running
var hero
var track,trackImage;

var powerCoinImage,obstacle1,obstacle2;

function preload(){
  trackImage = loadImage("track.jpg");
hero_running=loadAnimation("sprite1.png","sprite2.png","sprite3.png")
obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
}

function setup() {
  createCanvas(1500,700);

  track=createSprite(300,300);
track.addImage(trackImage);
  track.velocityX= -8;
  track.scale=1.2;
  

  hero=createSprite(40, 200, 100, 50);
  hero.addAnimation("running",hero_running)
  hero.scale=0.3;

  score

}

function draw() {
  background(0);
  track.velocityX= -8;
  hero.y= World.mouseY;
    
  text("Score: "+ score, 500,50);
  
  drawSprites();
}