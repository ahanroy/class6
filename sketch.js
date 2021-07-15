var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var balloon
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  
  
  spawnballoons()
  drawSprites();
}


// Creating  arrows for bow
function spawnballoons(){
  if (frameCount % 60 === 0){
   balloon=createSprite(0,Math.round(random(20,370)),10,40)
   balloon.velocityX=3

    r=Math.round(random(1,4))
    switch(r){
      case 1:balloon.addImage(red_balloonImage)
      break;
      case 2:balloon.addImage(blue_balloonImage)
      break;
      case 3:balloon.addImage(green_balloonImage)
      break;
      case 4:balloon.addImage(pink_balloonImage)
      break;
      default:break
    }
   balloon.scale=0.1
   balloon.lifetime=150

  }
}
