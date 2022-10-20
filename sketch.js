let canvasWidth = 900;
let canvasHeight = 900;
let x = 0;
let rectSize = 90;
let goingForward = true;

function setup (){
  createCanvas (canvasWidth, canvasHeight);
  rectMode (CENTER);
}

function draw(){

  background (125);

  if (goingForward){
    x++;
  } else {
    x--;
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0){
    goingForward = true;
  }

  rect(x, canvasHeight/2, rectSize, rectSize)
}