
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,redb,redb2,redb3,ground;
// function preload()
// {
	
// }

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(200,200,15);
	ground=new Ground(600,height-20,1200,20);

	redb=createSprite(width/2,height-45,130,11);
	redb.shapeColor="red";

	redb2=createSprite(467,615,11,90);
	redb2.shapeColor="red";

	redb3=createSprite(redb2.x-133,615 ,11,90);
	redb3.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
	background("yellow");
	Engine.update(engine);
	paper.display();
	ground.display();
	drawSprites();
 
}



