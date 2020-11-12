
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    ground=new Ground(500,480,1000,10);
    plastic1=new Plastic(865,466,200,17);
    plastic2=new Plastic(774,425,17,100);
    plastic3=new Plastic(962,425,17,100);
    ball=new Paper(30,450,15)
}


function draw() {
  ellipseMode(RADIUS)
  rectMode(CENTER);
  background(0);
  ground.display();
  plastic1.display();
  plastic2.display();
  plastic3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:47,y:-35})
  }
}

