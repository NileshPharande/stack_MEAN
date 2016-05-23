var showDate = function()
{
    document.getElementById("demo1").innerHTML = Date();
}

var changeImage = function()
{
    var imageTag = document.getElementById("myImage");
    if(imageTag.src.match("bulbOn"))
    {
        imageTag.src = "pic_bulbOff.gif";
    }
    else
    {
        imageTag.src = "pic_bulbOn.gif";
    }
}

function changeStyle()
{
    var elementWithStyle = document.getElementById("demo2");
    elementWithStyle.style.fontSize = "25px";
    elementWithStyle.style.color = "red";
}


function myValidatorFunc()
{
    var x, text;
    x = document.getElementById("num").value;
    if (isNaN(x) || x<1 || x> 10 )
    {
        text = "Invalid input";
    }
    else
    {
        text = "valid input.";
    }
    document.getElementById("demo3").innerHTML = text;
}