function preload(){

}

function setup(){
    canvas = createCanvas(600, 480);
    canvas.position(650, 300)
    video = createCapture(VIDEO);
video.hide()
}

function draw(){
image(video, 0, 0, 640, 480);
circle(50, 50, 100,);
circle(150, 50, 100);
circle(250, 50, 100);
circle(350, 50, 100);
circle(450, 50, 100);
circle(550, 50, 100);
circle(50, 430, 100);
circle(50, 430, 100);
circle(150, 430, 100);
circle(250, 430, 100);
circle(350, 430, 100);
circle(450, 430, 100);
circle(550, 430, 100);
circle(50, 430, 100);
rect(23, 100, 55, 280);
rect(523, 100, 55, 280);
}

function take_snapshot(){
    save("pic.png");
}