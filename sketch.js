const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thun, thun1, thun2, thun3, thun4;

var engine, world;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;

function preload(){
    back_img = loadImage("bg.gif");
    thun1 = loadImage("thunderbolt/1.png");
    thun2 = loadImage("thunderbolt/2.png");
    thun3 = loadImage("thunderbolt/3.png");
    thun4 = loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(1350,650);
    
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,450);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

}

function draw(){
    background(back_img);
    Engine.update(engine);


      rand = Math.round(random(1,4));
      if(frameCount%80===0){
          thunderCreatedFrame=frameCount;
          thun = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thun1);
              break;
              case 2: thun.addImage(thun2);
              break; 
              case 3: thun.addImage(thun3);
              break;
              case 4: thun.addImage(thun4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  
      if(thunderCreatedFrame + 10 ===frameCount && thun){
          thun.destroy();
      }

      umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxDrops; i++){
          drops[i].showDrop();
          drops[i].updateY();
          
      }

      //textFont("Arial");
      textSize(30);
      text("BATMAN THE ULTIMATE HERO",500,100);
      text("BATMAN THE TRUE HERO OF GOTHAM CITY",500,130);
  
      drawSprites();
}   



