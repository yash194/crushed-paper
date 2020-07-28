
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobj,box;


function setup() {
	createCanvas(1600, 700);

  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
  box=new dustbin(1200,650);
  paperobj=new paper(200,600,40);
  
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red");
  ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
  World.add(world, ground);




	//Create the Bodies Here.
  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  box.display(); 
  paperobj.display();
  
 
  
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
     
   }
 }

