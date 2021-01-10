class Bob{
    constructor(x,y){
        var options={
            isStatic:true,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x, y, 80, options);
        this.radius = 80;
        World.add(world,this.body);

    } 
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(250,142,245);
        ellipse(pos.x,pos.y,this.radius);
    }
}
