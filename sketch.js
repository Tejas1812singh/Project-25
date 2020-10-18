
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  side1=new Dustbin(width/2,height -50,200,20)
    side2=new Dustbin(width/2-100,height-50,20,100)
    side3=new Dustbin(width/2+100,height-50,20,100)
    paper=new Paper(30,635,20)
	ground=new Ground(400,680,800,10)
	Engine.run(engine);
 
	

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


  side1.display();
  side2.display();
  side3.display();
  ground.display();
  paper.display();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.bodies,paper.bodies.position,{x:22,y:-22})
	}
}



