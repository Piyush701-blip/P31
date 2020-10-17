class Division
{
    constructor(x, y, w, h)
    {
     var options =
     {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, w, h, options);
     this.width = w;
     this.height = h;
     World.add(world, this.body);
    }
    
    show()
    { 
     push();
     rectMode(CENTER);
     noStroke();
     fill(100);
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
     pop();
    }
}