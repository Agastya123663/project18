var car , wall;
var speed , weight;



function setup() {
  createCanvas(1600,400);

  speed = random(40,60);
  weight  = random(400,1500);


  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.weight = weight;
  wall = createSprite(1400,200,80,height/2);
 
}

function draw() {
  background(0);  

 if(wall.x-car.x<(wall.width+car.width)/2    ){
   car.velocityX = 0;
  var deformation = (0.5*weight*speed*speed)/22500;


  if(deformation<60){
 car.shapeColor = "green";
  }  
  if(deformation<110 && deformation>60){
 car.shapeColor = "yellow";
  }  
  if(deformation>110){
 car.shapeColor = "red";
  }
 }

  drawSprites();
}