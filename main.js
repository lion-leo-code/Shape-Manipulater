noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(950, 120);

    video = createCapture(VIDEO);
    video.size(637, 480);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded(){
    console.log("PoseNet Initialized!");
  }

  function gotPoses(results){
    if(results.length > 0){
      console.log(results);

      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
    console.log("Nose X = " + noseX + " | Nose Y = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("Left Wrist X = " + leftWristX + " | Right Wrist X = " + rightWristX + " | Difference = " + difference);
    }
  }
    function draw(){
    background('#969A97');

    document.getElementById("square_size").innerHTML = "The Size of the Square is: " + difference + " px";
    fill('#3137fd');
    stroke('#3137fd');
    square(noseX, noseY, difference);
  }