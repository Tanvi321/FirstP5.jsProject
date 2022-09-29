
function setup()
{canvas=createCanvas(640, 480);
canvas.position(500, 150);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{image(video, 200, 100, 300, 300);
fill(0,0,255);
stroke(0,0,255);
circle(50, 40, 70);
circle(50, 425, 70);
circle(590, 40, 70);
circle(590, 425, 70);
fill(0,0,255);
stroke(0,0,255);
rect(80, 40, 480, 20);
rect(80, 425, 480, 20);
rect(40, 40, 20, 390);
rect(580, 40, 20, 390);}

function take_snapshot()
{save('student_name.png');}

