var fixedRect,movingRect; 

var diff; function setup(){ createCanvas(800,400) 
  //fixedRect = createSprite(300,100,100,40); 
  fixedRect = createSprite(200,200,50,80); 
  fixedRect.shapeColor= "green";
  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "green"; 
}

function draw(){
  background(200);
  
  movingRect.x = World.mouseX; 
  movingRect.y= World.mouseY;

  if(Math.abs(movingRect.x - fixedRect.x) <= movingRect.width / 2 + fixedRect.width / 2 && Math.abs(movingRect.y - fixedRect.y) <= movingRect.height / 2 + fixedRect.height/ 2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor= "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor= "green";
  }
  drawSprites();
}
