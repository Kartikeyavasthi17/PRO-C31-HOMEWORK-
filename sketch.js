const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos =[];
var divisions =[];
var particles =[];

var divisionHeight =300;

var kk;

function preload() {
  
}

function setup() {
  var canvas = createCanvas(500,700);
  
  engine = Engine.create();
  world = engine.world;

  plinko1 =new Plinko(200,200,20);

  for(var j=30; j <= width; j =j+50)
  {
     plinkos.push(new Plinko(j,75,10));
     
  }
 
  for(var j =30; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j =30; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j =30; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,375,10));
  }

  for(var k=0; k <= width; k=k+80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  kk =new Division(250,695,1000,10);

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(50,450),40,10));
  }

 for(var k = 0; k < divisions.length; k++)
  {
      divisions[k].display();
  }

  for(var j = 0; j <particles.length; j++)
  {
    particles[j].display();

  }

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

  kk.display();

  drawSprites();

}