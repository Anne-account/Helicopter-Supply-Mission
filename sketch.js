var helicopterIMG, helicopterSprite, pkg,packageIMG;
var packageBody,ground;

var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	pkg=createSprite(width/2,80,10,10);
	pkg.addImage(packageIMG);
	pkg.scale=0.2;

	helicopterSprite=createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,20,{restitution:1, isStatic:true});
	World.add(world, packageBody);
	
   ground = new Ground(width/2,660, width,10);

	 box1=new Box(320,610,20,100);
	 box2=new Box(410,650,200,20);
	 box3=new Box(500,610,20,100);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  pkg.x= packageBody.position.x; 
  pkg.y= packageBody.position.y;

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
  drawSprites();
  textSize(30);
  strokeWeight(4)
  stroke("black");
  fill("white");
  text("Press the down arrow button to drop the medical kit",60,100);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) 
  {
    helicopterSprite.x=helicopterSprite.x-20;    
    Body.translate(packageBody,{x:-20,y:0});
  }

   else if (keyCode === RIGHT_ARROW) 
   {
    helicopterSprite.x=helicopterSprite.x+20;
    Body.translate(packageBody,{x:20,y:0});
  }

  else if (keyCode === DOWN_ARROW) 
  {
    Body.setStatic(packageBody,false);
  }
}



