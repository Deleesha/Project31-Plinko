class Plinko {

    constructor(x,y,radius){

        var ball_options = {
            restitution : 0.5 , density : 1.5 , isStatic : true
        }
        
        this.body = Bodies.circle(x,y,radius, ball_options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("white"); 
        ellipse(0, 0,this.radius,this.radius);
        pop();

        

    }



}