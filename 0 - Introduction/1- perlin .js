let xoff1 = 0;
let xoff2 = 10000

function setup() {
  createCanvas(400, 400);
  background(51);
}

function draw() {
  let x = map(noise(xoff1), 0, 1, 0, width )
  let y = map(noise(xoff2), 0, 1, 0, height )
  
  xoff1 += 0.01
  xoff2 += 0.01
  ellipse(x, y, 24, 24);
}