
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Boy,boyImage;
var ground,tree,treeImage;
var stone;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  
	Boy    = new boy (400,300,50,50);
	ground = new Ground(800,700);
	Stone  = new Stone(100,450,30)
	mango1 = new Mango(600,300,30); 
	mango2 = new Mango(850,335,30);
	mango3 = new Mango(670,250,30);
	mango4 = new Mango(730,200,30);
	mango5 = new Mango(700,320,30);
    attach = new Shoot(stones.body,{x:100,y:450});

	tree = createSprite(770,360);
	tree.addImage(treeImage);
	
	boy = createSprite(150,550);
	boy.addImage(boyImage);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);

drawSprites();

boy.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    attach.fly();
}

function detectCollision(Lstone,Lmango){
mangoBodyposition = lmango.body.position 
stoneBodyposition = lstones.body.position

var distance = dist (stoneBodyposition.x, stoneBodyposition.y, mangoBodyposition.x, mangoBodyposition.y)
if(distance<=mango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:450});
		attach.Launch(stone.body);
	}
}