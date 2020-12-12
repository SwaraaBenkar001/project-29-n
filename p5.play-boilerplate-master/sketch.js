const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockRed1, BlockRed2, BlockRed3, BlockRed4, BlockRed5, RedBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockRed8, BlockRed9, BlockRed10, BlockRed11, BlockRed12, BlockRed13, BlockRed14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockRed1 = new Box(200, 182, 20, 20);

  BlockRed2 = new Box(220, 182, 20, 20);

  BlockRed3 = new Box(240, 182, 20, 20);

  BlockRed4 = new Box(260, 182, 20, 20);

  BlockRed5 = new Box(280, 182, 20, 20);

  BlockRed6 = new Box(300, 182, 20, 20);

  BlockRed7 = new Box(320, 182, 20, 20);

  //second level
  BlockPink1 = new BoxPink(201, 2, 20, 20);

  BlockPink2 = new BoxPink(220, 2, 20, 20);

  BlockPink3 = new BoxPink(240, 2, 20, 20);

  BlockPink4 = new BoxPink(260, 2, 20, 20);

  BlockPink5 = new BoxPink(280, 2, 20, 20);

  BlockPink6 = new BoxPink(300, 2, 20, 20);

  BlockPink7 = new BoxPink(320, 2, 20, 20);

  //third level
  BlockRed8  = new Box(202, 182, 20, 20);

  BlockRed9  = new Box(220, 182, 20, 20);

  BlockRed10 = new Box(240, 182, 20, 20);

  BlockRed11 = new Box(260, 182, 20, 20);

  BlockRed12 = new Box(280, 182, 20, 20);

  BlockRed13 = new Box(300, 182, 20, 20);

  BlockRed14 = new Box(320, 182, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background("yellow");
  ground1.display();

  BlockRed1.display();

  BlockRed2.display();

  BlockRed3.display();

  BlockRed4.display();

  BlockRed5.display();

  BlockRed6.display();

  BlockRed7.display();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();

  BlockRed8.display ();

  BlockRed9.display ();

  BlockRed10.display();

  BlockRed11.display();

  BlockRed12.display();

  BlockRed13.display();

  BlockRed14.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

