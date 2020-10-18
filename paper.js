class Paper{
    constructor(x,y,radius)
   
    {
        this.image = loadImage("paper.png");
    
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.5
    
           
        }
    this.bodies=Matter.Bodies.circle(x, y, radius, options)
    this.radius=radius
    World.add(world,this.bodies)
    }
    display()
    {
        var pos =this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(8);
        
        fill(255);
        ellipse( 0, 0,this.radius,this.radius);
        pop();
      

     
    }
}

