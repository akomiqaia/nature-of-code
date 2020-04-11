let xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  // let x = random(width)
  let x = map(noise(xoff), 0, 1, 0, width )
  ellipse(x, 200, 24, 24);
  
  xoff += 0.01
}