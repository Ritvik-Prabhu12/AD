var fixedRect,movingRect
var ob1,ob2,ob3,ob4
function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  movingRect=createSprite(200,200,50,50)
  movingRect.shapeColor="green"
  movingRect.debug=true


  ob1=createSprite(150,100,50,60)
  ob2=createSprite(250,100,50,60)
  ob3=createSprite(350,100,50,60)
  ob4=createSprite(450,100,50,60)

  ob1.shapeColor="green"
  ob2.shapeColor="green"
  ob3.shapeColor="green"
  ob4.shapeColor="green"

}


function draw() {
  background(0);  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(touching(movingRect,ob1)){
  ob1.shapeColor="blue";
  movingRect.shapeColor="blue";
}
else{
 ob1.shapeColor="green";
  movingRect.shapeColor="green";

}
  drawSprites();
}
function touching(p1,p2){
  if(p1.x-p2.x < p2.width/2 + p1.width/2 
    && p2.x- p1.x < p2.width/2 + p1.width/2 
    && p1.y- p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2){
    
    return true;
    
    }
    else{
    
   return false;
    
    }
    
}