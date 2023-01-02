difference= 0;
rightWristX=0;
leftWristX=0;
function preload(){}
function setup(){
    video= createCapture(VIDEO);

    canvas= createCanvas(550,450);
    canvas.position(680,125);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet Is Initialized!");
}


function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference= floor(leftWristX- rightWristX);    
console.log("leftWristX="+ leftWristX+ "rightWristX=" + rightWristX+ "difference="+ difference);
}
}

function draw(){
    background("#f5f5f5");
    textSize(difference);
    fill("#000000");
    text('Mitul',0,350);
  
}