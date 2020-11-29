class Umbrella{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("Walking Frame/walking_2.png", "walking_1.png");
        World.add(world, this.umbrella);
    }
 
      display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,300,300);
      }



}