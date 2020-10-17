let sWidth = 1300;
let sHeight = 600;
let ratio = 25;
let s;
let food;
// Spawn Positions for food
let xbound = (sWidth/ratio)-1; // minus 1 so the food doesn't appear off screen
// x range 0 --> xbound
let ybound = (sHeight/ratio)-1;
// y range 0 --> ybound

function setup()
{
    createCanvas(sWidth, sHeight);
    frameRate(15);
    s = new Snake();
    food = new Food();
}

function keyPressed()
{
    if ((keyCode == LEFT_ARROW || keyCode == 65) && s.xvel == 0)
    {
        s.xvel = -ratio;
        s.yvel = 0;
    }
    else if ((keyCode == RIGHT_ARROW || keyCode == 68) && s.xvel == 0)
    {
        s.xvel = ratio;
        s.yvel = 0;
    }
    else if ((keyCode == UP_ARROW || keyCode == 87) && s.yvel == 0)
    {
        s.xvel = 0;
        s.yvel = -ratio;
    }
    else if ((keyCode == DOWN_ARROW || keyCode == 83) && s.yvel == 0)
    {
        s.xvel = 0;
        s.yvel = ratio;
    }
}


function draw()
{
    noStroke();
    background(41);
    s.move();
    s.show();
    food.show();
}