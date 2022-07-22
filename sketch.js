var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var jump;
var obsTop1,obsTop2
var obsbottom1, obsbottom2, obsbottom3
var gameState =1
var Grptop ,Grpbottom


function preload(){
bgImg = loadImage("assets/bg.png")
jump = loadSound("assets/jump.mp3")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")
obsbottom1 = loadImage("assets/obsBottom1.png")
obsbottom2 = loadImage("assets/obsBottom2.png")
obsbottom3 = loadImage("assets/obsBottom3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

Grptop= new Group();
GrpBottom = new Group();

}

function draw() {
  
  background("black");
        
          
           balloon.velocityY = balloon.velocityY+2;
 

if (gameState === 1){
  if(keyDown("space")) {
    balloon.velocityY= -6 ;
    }
    spawnObsTop();
    spawnObsBottom();

    if (balloon.collide(Grptop) || balloon.collide(GrpBottom)){
      gameState=2
    }
  
}
if (gameState ===2){
  balloon.velocityY =0;
    }


           
   
        drawSprites();
        
}
function spawnObsTop(){
  
  if (frameCount%60 ===0){
    obsTop = createSprite(400,200,50,50)
    obsTop.velocityX= -5 

    r= Math.round(random(1,2))
    switch(r){
      case 1: obsTop.addImage(obsTop1)
      break;
      case 2: obsTop.addImage(obsTop2)
      break;

    }
    obsTop.scale=0.1;
    obsTop.y=random(10,100)
    obsTop.lifetime=100;
    Grptop.add(obsTop)
  }
  
}

function spawnObsBottom(){

  if (frameCount % 80=== 0){
    obsBottom = createSprite(450,350,20,20)
    obsBottom.velocityX= -5

    r = Math.round(random(1,3))
    switch (r){
      case 1 : obsBottom.addImage(obsbottom1)
      break;
      case 2 : obsBottom.addImage(obsbottom2)
      break;
      case 3 : obsBottom.addImage(obsbottom3)
      break;
    }
    obsBottom.scale =0.1;
    obsBottom.lifetime=100;
    GrpBottom.add(obsBottom)
  }
}

