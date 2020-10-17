class Plinko
{
    constructor(x, y, r)
    {
        var options = 
        {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
    }
    show()
    {
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}