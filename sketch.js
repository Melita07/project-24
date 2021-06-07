
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(mouseX,mouseY,50,50);
	ground = new Ground(400,690,800,10);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  

  
  hammer.display();
  ground.display();
}



