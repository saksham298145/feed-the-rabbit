var garden,rabbit;

var gardenImg,rabbitImg;

var apple,appleImg

var leaves,leavesImg

function preload(){

  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg= loadImage("apple.png")

  leavesImg= loadImage("Leaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=mouseX
var r=Math.round(random(1,3))
console.log(r)
if (frameCount%80===0){
  if (r===2){
    createApples()
    
    
  
  }
  else {
    createLeaves()
  }
} 
  drawSprites()
}
 function createApples(){
   
   apple=createSprite(random(50,350),40,10,10)
   apple.addImage(appleImg)
   apple.scale=0.05
   apple.velocityY=4
apple.lifetime=150
 }

 function createLeaves(){
   
leaves=createSprite(random(40,200),30,8,9)
leaves.addImage(leavesImg)
leaves.scale=0.08
leaves.velocityY=4
  leaves.lifetime=150 
 }
 
 