class Stone{
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.image = loadImage("stone.png")
        
        World.add(world, this.body)
    }
    display(){
        push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            fill("white");
            image(this.image, 0, 0, 30, 30);
            pop();
    }
}