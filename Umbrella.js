class Umbrella{
    constructor(x,y){
        
        this.body = Bodies.circle(x,y);
        this.x = x;
        this.y = y;
        
        this.image = loadImage("images/Walk/walking_1.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        
        fill("blue");
        image(pos.x, pos.y);
      }
      
      }
    