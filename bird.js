class Bird{

    constructor(x,y){
        var options ={
            restitution:0.8,
            friction:0.3,
            density:1.5         }
         
           //creating  the ball
           this.body = Bodies.rectangle(x,y,50,50, options);
           this.width= 50;
           this.height=50;
           World.add(world,this.body);
    }

    display(){
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);         
       pop();
    }
    
}