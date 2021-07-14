class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.SlingShort = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.SlingShort);
    }
fly(){
    this.SlingShort.bodyA=null;
}
    display(){
    if(this.SlingShort.bodyA){
   
        var pointA = this.SlingShort.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }    
}