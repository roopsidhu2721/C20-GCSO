var car, wall;
var speed, weight;
var deform;

function setup() 
{
  createCanvas(1600,400);
  car = createSprite(50,200, 50, 40);
  car.shapeColor = "white";
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() 
{
  background("black");
  
  car.velocityX = speed;

  if(wall.x - car.x  < wall.width/2 + car.width/2) 
  {
    car.x = 1450;
    deform = (0.5 * weight * speed * speed)/22500;
    if(deform <= 100 && deform > 0)
    {
      car.shapeColor = "green";
    }
    if(deform <= 180 && deform > 100)
    {
      car.shapeColor = "yellow";
    }
    if(deform > 180)
    {
      car.shapeColor = "red";
    }
  }
    drawSprites();
}