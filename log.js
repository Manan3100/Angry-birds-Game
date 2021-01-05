class Log{

    constructor(x,y,height,angle){
        var options ={
            restitution:0.3,
            friction:2,
            density:1         }
         
           //creating  the ball
           this.body = Bodies.rectangle(x,y,15,height, options);
           this.width= 15;
           this.height=height;
           Matter.Body.setAngle(this.body, angle);
           
           World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);         
       pop();
    }
    
}