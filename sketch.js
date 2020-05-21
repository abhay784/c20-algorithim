var fixedRect
var movingRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,100,50,50);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.width/2+fixedRect.width/2 > movingRect.x - fixedRect.x &&
    fixedRect.width/2 + movingRect.width/2 > fixedRect.x - movingRect.x &&
    movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y &&
    fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y)
    {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }
    else{
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "blue";
    }


  drawSprites();
}