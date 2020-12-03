class Mango{
        constructor(x, y, r){
            var options = {
                isStatic : true,
                restitution : 0.3,
                friction : 1 
            }
            this.r=r
            this.body = Bodies.circle(x,y,20,options)
            this.image = loadImage("mango.png")

            World.add(world, this.body)

        }
        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
          //rotate(angle);
            imageMode(CENTER);
            fill("white");
            image(this.image,0,0,this.r,this.r);
            pop();
        }
}