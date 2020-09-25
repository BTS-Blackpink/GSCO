var car1, wall;
var speed, weight;
function setup() {
  createCanvas(1600, 400);
  speed = random (55, 90);
  weight = random (400, 1500);
  car1 = createSprite(200, 200, 105, 20);
  wall = createSprite(1500, 200, 60, 300);
}

function draw() {
  background("black"); 
  wall.shapeColor = color(80, 80, 80);
  car1.velocityX = speed;
  
  if(wall.x-car1.x < (car1.width+wall.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5* weight * speed * speed/22500;
    if (deformation>180){
      car1.shapeColor = color(255, 0, 0);
    }
    if(deformation<180 && deformation>100){
      car1.shapeColor = color(230, 230, 0);
    }
    if(deformation<=100){
      car1.shapeColor = "green";
    }
    console.log(deformation);
  }
  drawSprites();
}