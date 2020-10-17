class Snake
{
    constructor()
    {
        this.initialize();
    }

    initialize()
    {
        this.x = sWidth/4;
        this.y = sHeight/2;
        this.xvel = ratio;
        this.yvel = 0;
        this.length = 1;
        this.tail = []; // Array keeps track of the snake's past locaiton
    }
    
    // move() updates the snakes position (but doesn't draw anything to the screen)
    move()
    {
        this.x += this.xvel;
        this.y += this.yvel;

        // Checking for collision with a food object
        if (this.x == food.x && this.y == food.y)
        {
            this.length++;
            food.newloc(); // Food pops up in a new location
        }

        // Checking for collision with borders
        if ((this.x < 0 || this.x >= sWidth) || (this.y < 0 || this.y >= sHeight))
        {
            this.gameover();
        }

        // Make snake longer
        if (this.length == this.tail.length)
        {
            for (let i = 0; i < this.tail.length-1; i++)
            {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.length-1] = [this.x, this.y];

        // Check if the snake makes contact with itself
        for (var i=0; i<this.tail.length-1; i++)
        {
            if (this.x == this.tail[i][0] && this.y == this.tail[i][1])
            {
                this.gameover();
                //break;
            }
        }
        
    }

    // redraw() updates the snakes position on the screen
    show()
    {
        let c = color('white');
        fill(c);

        for (var i = 0; i < this.length-1; i++)
        {
            rect(this.tail[i][0], this.tail[i][1], ratio, ratio);
        }
        rect(this.x, this.y, ratio, ratio);
    }

    gameover()
    {
        this.initialize();
    }
}