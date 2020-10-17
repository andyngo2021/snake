class Food
{
    constructor()
    {
        this.x = int(random(0, xbound+1))*ratio;
        this.y = int(random(0, ybound+1))*ratio;
    }

    show()
    {
        let c = color(235, 64, 52);
        fill(c);
        rect(this.x, this.y, ratio, ratio);
    }

    generate_x()
    {
        return int(random(0, xbound+1))*ratio;
    }

    generate_y()
    {
        return int(random(0, ybound+1))*ratio;
    }

    newloc()
    {
        let crash = true;
        let tmpx, tmpy;
        while (crash)
        {
            crash = false;
            tmpx = this.generate_x();
            tmpy = this.generate_y();
            for (var i=0; i<s.tail.length; i++)
            {
                if (tmpx == s.tail[i][0] && tmpy == s.tail[i][1])
                {
                    crash = true;
                    break;
                }
            }
        }
        this.x = tmpx;
        this.y = tmpy;

    }
}