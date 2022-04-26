class Drops {
   /*
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world, this.rain)
    }
    */
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }


    update(){
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
       /* var pos2 = this.rain.position
        ellipse(this.rain, pos2.x,pos2.y,20,20)
        */
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }

}