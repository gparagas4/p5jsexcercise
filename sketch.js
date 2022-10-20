let canvasWidth = 400;
let canvasHeight = 400;
let x = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectmode(CENTER);
}

function draw() {

  background(125);

  rect (x++, canvasHeight/2, 30, 30);
  
}
