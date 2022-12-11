
var balloon, balloonImg
var obstacleTop,obstacleTop1,obstacleTop2
var obstacleBottom, obstacleBottom1, obstacleBottom2, obstacleBottom3
var gameOver, gameOverImg
var restart, restartImg
var backgroundImg
var dieSound,jumpSound
var invisibleTop,invisibleBottom

var obstacleTopGroup,obstacleBottomGroup

var score = 0;

//game states      
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){

  balloonImg = loadAnimation("balloon1.png","balloon2.png","balloon3.png")
  obstacleBottom1 = loadImage("obsBottom1.png")
  obstacleBottom2 = loadImage("obsBottom2.png")
  obstacleBottom3 = loadImage("obsBottom3.png")
  obstacleTop1 = loadImage("obsTop1.png")
  obstacleTop2 = loadImage("obsTop2.png")
  backgroundImg = loadImage("bg.png")
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")

  dieSound = loadSound("die.mp3")
  jumpSound = loadSound("jump.mp3")

}

function setup(){

  createCanvas(600,600)

  //creating the ballon
  balloon = createSprite(150,300)
  balloon.addAnimation("balon",balloonImg)
  balloon.scale = 0.4

  invisibleTop = createSprite(300,0,600,20)
  invisibleTop.visible = false
  invisibleBottom = createSprite(300,600,600,20)
  invisibleBottom.visible = false


  obstacleTopGroup = new Group()
  obstacleBottomGroup = new Group()
}

function draw() {
  background(backgroundImg)

  
  if(gameState === PLAY){

    //control for the ballon

    if(keyDown("space")){
      balloon.velocityY = -7
    }

    balloon.velocityY += 1


    spawnTopObstacles()
    spawnBottomObstacles()
  }


  drawSprites()
}

function spawnTopObstacles(){
  if(frameCount % 80 === 0){
    obstacleTop = createSprite(650,random(10,100))
    obstacleTop.velocityX = -3
    obstacleTop.scale = 0.1

    var rand = Math.round(random(1,2))
    switch(rand){
      case 1:
        obstacleTop.addImage("obs1",obstacleTop1)
        break
      case 2:
        obstacleTop.addImage("obs2",obstacleTop2)
        break
    }

    obstacleTopGroup.add(obstacleTop)
  }
}

function spawnBottomObstacles(){
  if(frameCount % 80 === 0){
    obstacleBottom = createSprite(650,550)
    obstacleBottom.velocityX = -3
    obstacleBottom.scale = 0.1

    var rand = Math.round(random(1,3))
    switch(rand){
      case 1:
        obstacleBottom.addImage("obs1",obstacleBottom1)
        break
      case 2:
        obstacleBottom.addImage("obs2",obstacleBottom2)
        break
      case 3:
        obstacleBottom.addImage("obs3",obstacleBottom3)
        break
        
    }

    obstacleBottomGroup.add(obstacleBottom)
  }
}















