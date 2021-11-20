function preload(){
    song=loadSound("stay.mp3");
}
function setup(){
    canvas=createCanvas(500,500);
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas.center();
    video.hide();
    var poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getPoses);
    console.log("testingg");
}
function modelloaded(){
    console.log("Model is Loaded!")
}
function draw(){
    image(video,0,0,500,500);
    fill("#00FF00");
}