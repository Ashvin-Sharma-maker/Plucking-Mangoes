class Ground {
    constructor(){
        var  options = {
            isStatic:true,
            friction:0.6
        }
        this.body = Bodies.rectangle(500,600,1200,30,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(500,600,1200,30);
    }
}