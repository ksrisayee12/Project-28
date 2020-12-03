
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImage
var boy
var stone
var tree
var ground
var mango1, mango2, mango3, mango4, mango5, mango6
function preload()
{
	bgImage = loadImage("bg3.jpg")
	tree = loadImage("tree.png")
	stone = loadImage("stone.png")
	boy = loadImage("boy.png")
	mango1 = loadImage("mango.png")
	mango2 = loadImage("mango.png")
	mango3 = loadImage("mango.png")
	mango4 = loadImage("mango.png")
	mango5 = loadImage("mango.png")
	mango6 = loadImage("mango.png")
	mango7 = loadImage("mango.png")
	mango8 = loadImage("mango.png")
	mango9 = loadImage("mango.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750, 700, 1500, 30);
	stone = new Stone(160, 49*9.30, 15, 15)
	chain = new Slingshot(stone.body, {x:200, y:540})
	mango1 = new Mango(1130, 190, 50)
	mango2 = new Mango(1200, 200, 50)
	mango3 = new Mango(1250, 300, 40)
	mango4 = new Mango(1400, 250, 45)
	mango5 = new Mango(1300, 280, 42)
	mango6 = new Mango(1000, 300, 46)
	mango7 = new Mango(1090, 300, 40)
	mango8 = new Mango(1100, 370, 50)
	mango9 = new Mango(1400, 350, 55)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);
  image(boy, 140, 49*9.30, 300,300)
  image(tree, 900, 100, 600, 600)
  console.log(stone, stone)
  ground.display()
  stone.display()
  chain.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)
  detectCollision(stone, mango9)

  stroke("#4000ff")
  strokeWeight(4)
  fill("red")
  textSize(40);
  text("Press Space For Second Chance", 410, 100)
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	chain.fly()
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		chain.attach(stone.body)
	}
}

function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if (distance<=50){
	Matter.Body.setStatic(lmango.body, false)
}

}