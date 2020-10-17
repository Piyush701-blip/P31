const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20);
  
  for(var i = 0; i <= width; i= i+80)
  {
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j+50)
  {
    plinkos.push(new Plinko(j, 75, 10, 10));
  }

  for(var j = 40; j <= width; j = j+50)
  {
    plinkos.push(new Plinko(j, 275, 10, 10));
  }

  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j, 175, 10, 10));
  }

  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j, 375, 10, 10));
  }

  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  for(var i = 0; i < divisions.length; i++)
  {
    divisions[i].show();
  }
  
  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].show();
  }
  
  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  for(var k = 0; k < particles.length; k++)
  {
    particles[k].show();
  }

  ground.show();
  
  drawSprites();
}