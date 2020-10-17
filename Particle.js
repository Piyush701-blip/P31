class Particle
{
    constructor(x, y, r)
    {
        var options = 
        {
            restitution:0.4
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        this.angle = this.body.angle;
        this.color = (random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    show()
    {
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill(this.color);
        rotate(this.angle);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}