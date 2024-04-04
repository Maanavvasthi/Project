function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,160);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded());
    poseNet.on("pose",gotPoses);
}