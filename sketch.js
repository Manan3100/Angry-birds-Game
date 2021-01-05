//NAMESPACING or NICKNAMING
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//for the angry bird game
var engine, world;
var ground;
var ball;
var box1;
var box2;
var box3;
var box4;
var box5;
var pig1;
var pig2;
var bird;
var log1;
var log2;
var log3;
var log4;

function setup() {
  createCanvas(1200,400);

  //created engine for abg
  engine = Engine.create();
  //my world is also my engine's world
  world = engine.world;

  ground = new Ground(600, height, 1200, 85);

  box1= new Box(730, 350, 50, 50);
  pig1 =  new Pig(800, 350);
  box2 = new Box(870, 350, 50,50);
  log1 = new Log(800, 310, 200, PI/2);
  
  box3= new Box(730, 280, 50, 50);
  pig2 =  new Pig(800, 280);
  box4 = new Box(870, 280, 50,50);
  log2 = new Log(800, 240, 200, PI/2);

  box5 = new Box(800, 200, 50, 50);
  log3 = new Log(760, 180, 130, PI/7);
  log4 = new Log(850, 180, 130, -PI/7);
  bird = new Bird(75, 200);
}

function draw() { 
  background("black"); 

  //to update the engine
  Engine.update(engine); 

  ground.display();

  box1.display();
  pig1.display();
  box2.display();
  log1.display();

  box3.display();
  pig2.display();
  box4.display();
  log2.display();

  log3.display();
  box5.display();
  log4.display();
  
  bird.display();
 
}