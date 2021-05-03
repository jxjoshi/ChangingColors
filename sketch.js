var c1;
var c2;
function setup() {
  createCanvas(800,400);
 
  c1=createSprite(400, 200, 50, 10);
  c1.shapeColor="green";

  c2=createSprite(500, 200, 30, 50);
  c2.shapeColor="green";
}

function draw() {
  background("orange"); 
  
  c2.x=World.mouseX;
  c2.y=World.mouseY;
  console.log(c2.x-c1.x);

  if(c2.x-c1.x<c1.width/2+c2.width/2 && 
    c1.x-c2.x<c1.width/2+c2.width/2 &&
    c2.y-c1.y<c1.height/2+c2.height/2 &&
    c1.y-c2.y<c1.height/2+c2.height/2
     ){
    c1.shapeColor="red";
    c2.shapeColor="red";
  }
  else{
    c1.shapeColor="green"
    c2.shapeColor="green"
  }

  drawSprites();
}