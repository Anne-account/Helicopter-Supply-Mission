class Box {
    constructor(x,y,width,height){

        var boxoptions={
            isStatic:true,
            restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,boxoptions);
        this.width=width;
        this.height=height;
 	    World.add(world, this.body);
        }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        strokeWeight(0);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}