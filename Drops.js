class Drop{
    constructor(x,y,){
        
        this.body = Bodies.circle(x,y);
        this.x = x;
        this.y = y;
        
        
        World.add(world, this.body);
        
    }
    display(){
        var pos =this.body.position;
       
        fill("blue");
        ellipse(pos.x, pos.y);
      }
      update(){
        if(this.body.position.y >= 200){
            Matter.Body.setPosition(random(0,200,random(0,50)));
        }
      }
    }
