let canvasWidth  = 500;
let canvasHeight = 600;
let x = 0 

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectmode(CENTER);
}

function draw (){

  background(125);

if (x== canvasWidth){
  x=0;
}
  rect(x++,canvasHeight/2, 30, 30);


}