var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet= createSprite(10, 200, 20, 5);
  bullet.shapeColor="white";
  bullet.velocityX=5;
  wall=createSprite(1200,200,thickness,200);
 // bullet.debug=true;
  //wall.debug=true;
  speed= random(223,320);
  weight=random(30,52);
  thickness=random(22,83);
}
//console.log(deformation);
function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-bullet.x<=(wall.width+bullet.width)/2){
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor='green';
    }
    else if(damage>10){
        wall.shapeColor='red';
    }
      
    }
  }
    
