const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine,world;
var divisons=[];
var divisionHeight=300;
var particles=[];
var plinkos=[];
var ground;
var score=0;

function preload(){

}

function setup() {
  createCanvas(800,700);
 engine=Engine.create();
 world=engine.world;

 ground=new Ground(400,690,800,20);

for(var i=0; i<=width;i=i+80){
  divisons.push((new Division(i,height-divisionHeight/2,10,divisionHeight)))
  }
  for(var j=75;j<=width;j=j+45){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=70;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));

  }
for(var j=75; j<=width;j=j+40){
  plinkos.push(new Plinko(j,275));

}
for(var j=50;j<=width-10;j=j+40){
  plinkos.push(new Plinko(j,375));
}
Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);  
  drawSprites();
  text("Score:"+score,20,40);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200,",560,550);
  text("200",660,550);
  text("200",720,550);


  for(var n=0;n<divisons.length;n++){
    divisons[n].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));

  }
  for(var h=0;h<particles.length;h++){
    particles[h].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  ground.display();
  
}