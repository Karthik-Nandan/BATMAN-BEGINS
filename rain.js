class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.rain = Bodies.circle(x, y, 10, options);
          this.radius = 8;
          World.add(world, this.rain);
    }
   
    updateY(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0, 650), y:random(0, 650)});
      }
    }
  
    showDrop(){
      strokeWeight(1);
      stroke("blue");
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
    }
  
  
  }