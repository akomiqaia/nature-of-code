let xoff1 = 0;
let xoff2 = 10000

function setup() {
  createCanvas(400, 400);
}
let inc = 0.01;
let start = 0;
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);    
    let y = noise(xoff) * height;
    vertex(x, y)

    xoff += 0.02
  }
  endShape()
  start += 0.02
}