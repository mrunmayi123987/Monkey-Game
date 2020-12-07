
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  
  monkey = createSprite(300,450,20,20);
  monkey.addAnimation("monkey running",monkey_running);
monkey.scale=0.3;
  
  ground = createSprite(300,470,600,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;
  
  stroke("black");
  fill("black");
  textSize(20);
}


function draw() {
  
  background("white");
  
  text("score"+score,10,100);
  
  
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival time"+survivalTime,450,100);
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y>100 ){
     monkey.velocityY=-12;
     }

  monkey.velocityY = monkey.velocityY+0.8;
  
  
  if (World.frameCount % 80 == 0){
 banana();
    
}
  
  if(World.frameCount%300===0){
     obstacles();
     }
  drawSprites();
}

function banana(){
  
  var banana = createSprite(300,300,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale=0.2;
 banana.velocityX=-4; 
  banana.y = Math.round(random(120,200));
  banana.lifetime=150;
  FoodGroup.add(banana);
}

function  obstacles(){
obstacle = createSprite(300,430,20,20);
  obstacle.addImage("obstacle",obstaceImage);
  obstacle.scale=0.2;
 obstacle.velocityX=-4;
 obstacle.x = Math.round(random(350,400)); 
  obstacle.lifetime=150;
  obstacleGroup.add(obstacle);
}

