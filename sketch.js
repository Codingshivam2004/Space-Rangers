var spaceShip;
var space;
var alienship1;
var alienship2,alienship3;
var missile;
var spaceshipImage,spaceImage;
var alienship1Image,alienship2Image,alienship3Image;
 var missileImage;
 var alienShipGroup;

function preload() {
spaceImage = loadImage("space.png");
spaceshipImage = loadImage("spaceShip.png");
alienship1Image = loadImage("alienship1.png");
missileImage = loadImage("alienship3.png");
alienship2Image = loadImage("alienship2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  space = createSprite(0,0);
  space.addImage(spaceImage);
  space.scale = 4.5;
  space.velocityY = 2;
 
  

 spaceShip = createSprite(650,650,20,20);
spaceShip.addImage(spaceshipImage);
spaceShip.scale = 1.3;

//creating groups
alienShipGroup = createGroup();
}

function draw() {
  background(255,255,255);  
  //Moving background
 if(space.y>680){
   space.y = 600;
 }

if(keyDown("space")){
  createMissile();
}

//if(missile.isTouching(alienShipGroup)){
  //alienShipGroup.destroyEach();
//}


 alienShip();
 alienShip2();
  drawSprites();
}
function alienShip(){
  if(frameCount%100===0){
alienship1 = createSprite(Math.round(random(100,600)),300,20,20);
alienship1.addImage(alienship1Image);
alienship1.velocityY = 2;
alienShipGroup.add(alienship1);
}

function alienShip2(){
 if(frameCount%300===0){
   alienship2 = createSprite(Math.round(random(100,600)),340,20,20);
   alienship2.addImage(alienship2Image);
   alienship2.y = spaceship.y;

 }
}

}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    spaceShip.x = spaceShip.x-30;
  }
  if(keyCode=== RIGHT_ARROW){
    spaceShip.x = spaceShip.x+30;
  }
}
function  createMissile(){
missile = createSprite(650,650,3,3);
missile.addImage(missileImage);
missile.velocityY = -5;
missile.x = spaceShip.x;
missile.scale = 0.3;
missile.lifetime = 90;

}
