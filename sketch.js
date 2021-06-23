var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database
var height
var position
function preload(){
   bg =loadImage("cityImage.png");
  // balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png",
   "hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
  database=firebase.database();
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

  textSize(20); 
  database.ref("balloon/height").on("value",readPosition,showError)
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    changePosition(0,-10);
    balloon.scale=balloon.scale+0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    changePosition(0,+10);
    balloon.scale=balloon.scale-0.01;
  }

 
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
  drawSprites();
}

function readPosition(data){
  height=data.val()
  balloon.x=height.x
  balloon.y=height.y
}
function changePosition(x,y){
  database.ref("balloon/height").set({
      x:height.x+x,

      y:height.y+y
  })
}


function showError(){
  console.log("there is an Error in your program")
}
