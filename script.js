setTimeout(changeBanner, 5000);

function hoverBlueDots (id)
{
    var pic1 = "images/read_more_blue.png";
    
    document.getElementById(id).src = pic1;
}

function mouseLeftWhiteDots (id)
{
    var pic1 = "images/read_more_white.png";
    
    document.getElementById(id).src =  pic1;
}

function mouseLeftYellowDots (id)
{
    var pic1 = "images/read_more_yellow.png";
    
    document.getElementById(id).src =  pic1;
}

this.bannerCount = 1;

function changeBanner ()
{
    var pic1 = "images/250X110668568400.jpg";
    var pic2 = "images/250X110571325734.jpg";

    if (this.bannerCount%2 != 0)
    {
        document.getElementById("banner").src = pic1;
    }
    else
    {
        document.getElementById("banner").src = pic2;
    }
    this.bannerCount++;
    setTimeout(changeBanner, 5000);
}